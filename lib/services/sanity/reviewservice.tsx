import { createClient } from 'next-sanity';

const client = createClient({
    projectId: '3iouolde',
    dataset: 'production',
    useCdn: true,
});

export async function fetchReviews() {
    const query = `*[_type == "reviews"]{
      _id,
      _type,
      _createdAt,
      _updatedAt,
      title,
      review[]{
        _key,
        _type,
        children[]{
          _key,
          _type,
          text
        }
      },
      tutor->{ 
        _id,
        _type,
        fullname,
        bio
      },
      questions[]{
        _key,
        _type,
        question,
        rating
    }
  }`;
  
  const reviews = await client.fetch(query);
  console.log(reviews);
  return reviews;
}
