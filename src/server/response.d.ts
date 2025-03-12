interface PostList {
	id: string;
	title: string;
	uploader: string;
	createdAt: Date;
}

interface Post extends PostList {
	content: string;
}

interface Account {
	id: string;
	password: string;
	nickname: string;
	createdAt: Date;
}