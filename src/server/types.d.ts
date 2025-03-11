export interface User {
	id: number;
	nickname: string;
	password: string;
	createdAt: Date;
};

export interface Post {
	id: number;
	title: string;
	content: string;
	uploader: string;
	createdAt: Date;
};