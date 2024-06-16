import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchMusic = createAsyncThunk(
    'playlist/fetchMusic',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8080/musics');
            if (!response.ok) {
                throw new Error('데이터를 불러오는 데 실패했습니다. 올바른 경로를 확인해 주세요.');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            // 에러 메시지를 사용자 정의 에러로 처리
            return thunkAPI.rejectWithValue('에러가 발생했습니다. 데이터 요청 경로를 확인해 주세요.');
        }
    }
);

const initialState = {
    items: [],
    status: 'idle',
    error: null
};

export const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        incrementAmount: (state, action) => {
            const song = state.items.find(song => song.id === action.payload);
            if (song) {
                song.amount += 1;
                song.inCart = true;
            }
        },
        decrementAmount: (state, action) => {
            const index = state.items.findIndex(song => song.id === action.payload);
            if (index !== -1 && state.items[index].amount > 1) {
                state.items[index].amount -= 1;
            } else if (index !== -1 && state.items[index].amount === 1) {
                state.items.splice(index, 1);
            }
        },
        clearCart: (state) => {
            state.items = state.items.filter(song => !song.inCart);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMusic.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMusic.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // 초기 데이터 세팅에서 각 아이템에 amount와 inCart를 추가
                state.items = action.payload.map(item => ({
                    ...item,
                    amount: 1,
                    inCart: true
                }));
            })
            .addCase(fetchMusic.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                alert(action.payload);  // 에러 메시지를 alert로 표시
            });
    }
});

export const { incrementAmount, decrementAmount, clearCart } = playlistSlice.actions;
export default playlistSlice.reducer;

export const selectTotalCartQuantity = (state) =>
    state.playlist.items.reduce((total, item) => item.inCart ? total + item.amount : total, 0);

export const selectTotalPrice = (state) =>
    state.playlist.items.reduce((total, item) => {
        if (item.inCart) {
            return total + item.price * item.amount;
        }
        return total;
    }, 0);

export const isCartEmpty = (state) =>
    state.playlist.items.every(song => !song.inCart);
