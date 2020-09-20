import React from 'react';
import moment from 'moment';
import { InView } from 'react-intersection-observer';
import { decodeHTML } from 'wjhm';

import { CollectionMenu, CollectionWrapper } from './posts.styles';

import { Link } from 'wjhm';
import { Base } from 'wjhm';

import { Intro } from 'wjhm';

function orderByDate(posts) {
  return posts.sort((a, b) => new Date(b['date']) - new Date(a['date']));
}

function datesGroupByComponent(dates, token) {
  return dates.reduce((val, obj) => {
    let comp = moment(obj['date']).format(token);
    (val[comp] = val[comp] || []).push(obj);
    return val;
  }, {});
}

declare type ArchiveProps = {
  posts: any[];
};

const Archive = (props: ArchiveProps) => {
  const posts = props?.posts;
  const hasPosts = posts?.length > 0;

  if (!hasPosts) return null;

  const postsSorted = orderByDate(posts);
  const postsArchive = datesGroupByComponent(postsSorted, 'YYYY-MM');

  const datesArray = Object.keys(postsArchive).map(key => {
    if (postsArchive[key] !== undefined) return key;
  });

  return (
    <Base>
      <Intro heading={`Insights`} subheading={`Insights`}>
        <p>
          Welcome one and all! With over 200 blog posts, in 14 different categories, it's safe to say I can get carried
          away with my posts.
        </p>
        <p>
          I am passionate about my industry and want to share and discuss topics from user interface design to
          photography!
        </p>
        <p>Feel free to browse through my thoughts and let me know what you think.</p>
      </Intro>
      <CollectionNavigation ids={datesArray} />
      <CollectionWrapper>
        {Object.keys(postsArchive).map((key, index) => (
          <Collection date={key} key={`Collection-${index}`} posts={postsArchive[key]} />
        ))}
      </CollectionWrapper>
    </Base>
  );
};

declare type CollectionProps = {
  date: string;
  key?: string;
  posts: [];
};

const Collection = ({ date, posts }: CollectionProps) => {
  const hasPosts = posts?.length > 0;
  if (!hasPosts) return null;

  return (
    <React.Fragment>
      {posts.map(({ id, slug, title }, index) => (
        <React.Fragment key={id}>
          {index === 0 && (
            <InView threshold={0} triggerOnce={false}>
              {({ inView, ref }) => (
                <h2 className={inView ? `h3 inview` : `h3`} id={`${moment(date).format('YYYY-MM')}`} ref={ref}>
                  {moment(date).format('MMMM YYYY')}
                </h2>
              )}
            </InView>
          )}
          <Link to={`/${slug}`}>
            <h3 className="h5" key={id}>
              {decodeHTML(title)}
            </h3>
          </Link>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

const CollectionNavigation = ({ ids }) => (
  <CollectionMenu>
    {ids.map(id => (
      <a href={`#${id}`} key={id}>
        {moment(id, 'YYYY-MM').format('MMM YYYY')}
      </a>
    ))}
  </CollectionMenu>
);

export default Archive;
