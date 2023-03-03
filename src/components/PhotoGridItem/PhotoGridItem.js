import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            srcSet={`${src.avif[0]} 1x, ${src.avif[1]} 2x, ${src.avif[2]} 3x`}
            type="image/avif"
          />
          <source
            srcSet={`${src.jpg[0]} 1x, ${src.jpg[1]} 2x, ${src.jpg[2]} 3x`}
            type="image/jpg"
          />
          <Image src={src.jpg[0]} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  )
}

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 2px;
  margin-bottom: 8px;
`

const Tags = styled.ul`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  line-height: 1.5;
  color: var(--color-gray-800);

  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`



export default PhotoGridItem;
