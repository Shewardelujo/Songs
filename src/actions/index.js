// Action creator
export const selectSong = (song) => {
    // Return an action (an object)
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
