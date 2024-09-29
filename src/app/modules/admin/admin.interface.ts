// admin.interface.ts
export interface IAdminAction {
    _id?: string; // Optional
    admin: string; // ID of the admin user
    action: string; // Action performed
    target: string; // ID of the target (user, post, etc.)
    targetModel: 'User' | 'Post' | 'Comment'; // Type of target
    createdAt?: Date; // Optional, will be set by MongoDB
  }
  