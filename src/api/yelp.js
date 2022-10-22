import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer kROlvRyMzWK_VutfUqcwWzSKowvGKeJeIlafw1bX0MRg9wF5hvwTPRbe3P08yJ6M6j6vKUgXAay9kQcdeRv-PIbvwGiGsS3n-24LAu03SqQPBqYQZjban8Kj9BtQY3Yx'
    }
});