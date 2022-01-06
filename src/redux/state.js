const
    ADD_POST = 'ADD-POST',
    UPDATE_POST = 'UPDATE-POST',
    ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_MESSAGE = 'UPDATE-MESSAGE'

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'It\'s my first post', likesCount: 15},
                {id: 3, message: 'Bla-bla-bla', likesCount: 10},
                {id: 4, message: 'It\'s my second post', likesCount: 13}
            ],
            newPostText: ''
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
            newMessageValue: ''
        }
    },
    _callSubscriber () {
        console.log('State changed')
    },

    getState() {
      return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

       if(action.type === ADD_POST) {
           let newPost = {
               id: 5,
               message: this._state.profilePage.newPostText,
               likesCount: 0
           };
           this._state.profilePage.postsData.push(newPost)
           this._state.profilePage.newPostText = ''
           this._callSubscriber(this._state)

       } else if(action.type === UPDATE_POST) {
           this._state.profilePage.newPostText = action.newText;
           this._callSubscriber(this._state)

       } else if(action.type === ADD_MESSAGE) {
           let newMessage = {
               id: 5,
               message: this._state.messagesPage.newMessageValue
           };
           this._state.messagesPage.messages.push(newMessage);
           this._state.messagesPage.newMessageValue = '';
           this._callSubscriber(this._state)

       } else if(action.type === UPDATE_MESSAGE) {
           this._state.messagesPage.newMessageValue = action.newMessage;
           this._callSubscriber(this._state)
       }
    }
}
export const addPostActionCreator = () => ( {type: ADD_POST} )
export const updatePostActionCreator = (text) => (
    {
        type: UPDATE_POST,
        newText: text
    } )
export const addMessageActionCreator = () =>( {type: ADD_MESSAGE} )
export const updateMessageActionCreator = (text) => (
    {
        type: UPDATE_MESSAGE,
        newMessage: text
    } )

export default store;
window.store = store;