import Api from "./Api"
export default {
    index() {
        return Api().get('/songs');
    },
    post(song) {
        return Api().post('/songs', song)
    },
    edit(song) {
        return Api().patch(`/songs/${song._id}`, song)
    },
    view(id) {
        return Api().get(`/songs/${id}`)
    },
    delete(id) {
        return Api().delete(`/songs/${id}`)
    },
}