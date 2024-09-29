// favourite.interface.ts
export interface IFavorite {
    _id?: string; // Optional
    user: string; // ID of the user who favourited the post
    post: string; // ID of the post being favourited
    createdAt?: Date; // Optional, will be set by MongoDB
  }
  