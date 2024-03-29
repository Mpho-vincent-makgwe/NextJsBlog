import Link from 'next/link';
import Image from "next/legacy/image";

import theme from './post-item.module.css';

const PostItem=({ post })=> {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={theme.post}>
      <Link href={linkPath}>
        <>
          <div className={theme.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout='responsive'
            />
          </div>
          <div className={theme.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </>
      </Link>
    </li>
  );
}

export default PostItem;
