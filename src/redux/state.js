let rerenderEntireTree;
let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 11},
            {id: 2, message: 'It\'s my first post', likesCount: 15},
            {id: 3, message: 'Bla-bla-bla', likesCount: 10},
            {id: 4, message: 'It\'s my second post', likesCount: 13}
        ],
        newPostText: 'Add new post'
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Yuliya', src: 'https://toppng.com/uploads/preview/chelovek-ikonka-11550711768yrvf1skjck.png'},
            {id: 2, name: 'Alex', src: 'https://cdn-icons-png.flaticon.com/512/76/76680.png'},
            {id: 3, name: 'Sanya', src: 'https://png.pngtree.com/png-clipart/20190115/ourlarge/pngtree-company-business-business-company-friendly-man-greeting-man-png-image_336981.jpg'},
            {id: 4, name: 'Klava', src: 'https://e7.pngegg.com/pngimages/292/651/png-clipart-computer-icons-symbol-miscellaneous-human.png'},
            {id: 5, name: 'Kesha', src: 'https://img.lovepik.com/free-png/20210922/lovepik-men-of-thought-png-image_401034757_wh1200.png'},
            {id: 6, name: 'Vova', src: 'https://avatanplus.com/files/resources/mid/5c97a1581b35f169b04e402f.png'},
            {id: 6, name: 'Vovan', src: 'https://ouch-cdn2.icons8.com/38RB9x-3SMd84KMIPes5TMjRSuJOTB1SJEWmMbUHmiI/rs:fit:196:337/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzkv/MTMyZDRmNWYtODU4/MC00YjA1LWFlMTYt/MzlhZWRhOTM4NTdl/LnN2Zw.png'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hi! Ho!'},
            {id: 3, message: 'How is your IT-kamasutra'},
            {id: 4, message: 'Yo'},
        ],
        newMessageValue: 'Write a message here...'
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.messagesPage.newMessageValue
    };
    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessageValue = '';
    rerenderEntireTree(state)
}

export const updatePost = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}
export const updateMessage = (newMessage) => {
    state.messagesPage.newMessageValue = newMessage;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;