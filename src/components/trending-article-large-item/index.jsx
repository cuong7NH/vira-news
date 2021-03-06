import React from 'react';
import { Link } from 'gatsby';
import { slugify } from '@utils/functions';
import {
  StaticImage,
  GatsbyImage,
  getImage,
  withArtDirection,
} from 'gatsby-plugin-image';
import {
  TrendingSingleItem,
  TrendingBlogPostTop,
  TrendingBlogPostCategory,
  TrendingBlogPostAuthor,
  TrendingPostContent,
  HrendingBlogPostTitle,
  TrendingBlogPostMeta,
  PostMetaLeftSide,
  PostDate,
  ReadTime,
  PostMetaRightSide,
  TrendingLargePostThum,
} from './style';

const TrendingSingleLargeItems = ({
  title,
  thume_image,
  small_image,
  date,
  dateSlug,
  categories,
  authorId,
  authorSlug,
  slug,
}) => {
  const images = withArtDirection(getImage(thume_image), [
    {
      media: '(max-width: 1024px)',
      image: getImage(thume_image),
    },
    {
      media: '(max-width: 575px)',
      image: getImage(small_image),
    },
  ]);
  return (
    <TrendingSingleItem>
      <TrendingLargePostThum>
        <Link to={`/${slug}`}>
          <GatsbyImage image={images} alt="" />
        </Link>
      </TrendingLargePostThum>
      <TrendingPostContent>
        <TrendingBlogPostTop>
          <TrendingBlogPostCategory>
            {categories &&
              categories.map((cat, i) => (
                <Link
                  key={i}
                  to={`/category/${slugify(cat.name)}`}
                  className={`cat-btn ${cat.color}`}>
                  {cat.name}
                </Link>
              ))}
          </TrendingBlogPostCategory>
          <TrendingBlogPostAuthor>
            By <Link to={`/profile/${authorSlug}`}>{authorId}</Link>
          </TrendingBlogPostAuthor>
        </TrendingBlogPostTop>
        <HrendingBlogPostTitle>
          <Link to={`/${slug}`}>{title}</Link>
        </HrendingBlogPostTitle>
        <TrendingBlogPostMeta>
          <PostMetaLeftSide>
            <PostDate>
              <i className="icofont-ui-calendar"></i>
              <Link to={`/date/${dateSlug}`}>{date}</Link>
            </PostDate>
            <ReadTime>10 min read</ReadTime>
          </PostMetaLeftSide>
          <PostMetaRightSide>
            <Link to="/">
              <StaticImage
                src="../../data/images/icons/small-bookmark.png"
                alt=""
              />
            </Link>
            <Link to="/">
              <StaticImage src="../../data/images/icons/heart.png" alt="" />
            </Link>
          </PostMetaRightSide>
        </TrendingBlogPostMeta>
      </TrendingPostContent>
    </TrendingSingleItem>
  );
};

export default TrendingSingleLargeItems;
