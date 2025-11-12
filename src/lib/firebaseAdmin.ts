// Firebase Admin SDK - Server-side only
// This file is for Next.js API routes that need Firebase Admin functionality

import admin from 'firebase-admin';

// Initialize Firebase Admin SDK if not already initialized
let firebaseAdmin: admin.app.App | null = null;

const initializeFirebaseAdmin = () => {
  if (!firebaseAdmin) {
    try {
      // Check if Firebase Admin is already initialized
      firebaseAdmin = admin.app();
    } catch (e) {
      // Not initialized, check for service account
      const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;
      
      if (!serviceAccount) {
        console.warn('⚠️ FIREBASE ADMIN: FIREBASE_SERVICE_ACCOUNT not set. Firebase Admin features will not work.');
        // Return a dummy app to prevent crashes
        return null;
      }

      try {
        const serviceAccountKey = JSON.parse(serviceAccount);
        firebaseAdmin = admin.initializeApp({
          credential: admin.credential.cert(serviceAccountKey),
          projectId: serviceAccountKey.project_id,
        });
        console.log('✅ FIREBASE ADMIN: Initialized successfully');
      } catch (error) {
        console.error('❌ FIREBASE ADMIN: Failed to initialize:', error);
        return null;
      }
    }
  }
  
  return firebaseAdmin;
};

// Export initialized admin instance
export const getFirebaseAdmin = () => {
  return initializeFirebaseAdmin();
};

// Export default for convenience
export default getFirebaseAdmin;

