// store.js
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import mockPosts from '../utils/__mocks__/mockPosts.json';

// export const fetchPosts = createAsyncThunk(
//   'posts/fetchPosts',
//   async (subreddit = 'reactjs', thunkAPI) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     return mockPosts.data.children.slice(0, 3).map((child) => {
//       const post = child.data;

//       return {
//         id: post.id,
//         subreddit: `R/${post.subreddit.toUpperCase()}`,
//         category: 'TECHNOLOGY',
//         time: `${Math.floor((Date.now() / 1000 - post.created_utc) / 3600)} hours ago`,
//         title: post.title,
//         author: post.author,
//         snippet: post.selftext ? `${post.selftext.slice(0, 100)}...` : 'External link or media post.',
//         votes: post.score,
//         comments: post.num_comments,
//       };
//     });
//   }
// );
// 1. Define the async thunk to fetch from Reddit API
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (subreddit = 'reactjs', thunkAPI) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const data = await response.json();
    
    // Map Reddit's nested response structure to a clean flat array
    return data.data.children.map((child) => ({
      id: child.data.id,
      subreddit: `R/${child.data.subreddit.toUpperCase()}`,
      category: child.data.category, // Map or categorize as needed
      time: `${Math.floor((Date.now() / 1000 - child.data.created_utc) / 3600)} hours ago`,
      title: child.data.title,
      author: child.data.author,
      snippet: child.data.selftext ? child.data.selftext.slice(0, 100) + '...' : 'External link or media post.',
      fullContent: child.data.selftext, // Store full content for modal
      votes: child.data.score,
      comments: child.data.num_comments,
      commentsData: child.data.comments || [], // Placeholder for comments, if available
    }));
  }
);


const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    searchQuery: '',
    selectedCategory: 'All posts',
    activePost: null, // Track currently viewed post for the modal
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    upvotePost: (state, action) => {
      const post = state.items.find((p) => p.id === action.payload);
      if (post) post.votes += 1;
    },
     // ... existing reducers ...
    setActivePost: (state, action) => {
      state.activePost = action.payload; // Post object
    },
    closeModal: (state) => {
      state.activePost = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery, setSelectedCategory, upvotePost, setActivePost, closeModal } = postsSlice.actions;

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
  },
});