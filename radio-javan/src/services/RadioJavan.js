import Api from "./Api"
const token = '270225:62aca214f3aaf2.81298829';
const newSongs = `https://one-api.ir/radiojavan/?token=${token}&action=new_songs`;
export default {
    newSongs() {
        return Api().get(newSongs);
    }
}