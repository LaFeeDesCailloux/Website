export interface GalleryImage {
    src: string;
    title?: string;
}

export enum ContactButtonState {
    DEFAULT,
    LOADING,
    SUCCESS,
    ERROR
}
