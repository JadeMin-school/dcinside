interface PostList {
	id: string;
	title: string;
	uploaderId: string;
	uploaderNick: string;
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