import * as React from 'react';

import { SEO } from 'wjhm';

import { Contact } from 'wjhm';
import { Footer } from 'wjhm';
import { Header } from 'wjhm';

import { Case } from 'wjhm';
import { Page } from 'wjhm';
import { Post } from 'wjhm';
import { Series } from 'wjhm';

import type { Seo as SEOTypes } from 'wjhmtypes';

if (typeof window !== `undefined`) {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require(`smooth-scroll`)(`a[href*="#"]`);
}

declare type typeName = {
  postType?: string;
};

declare type BaseProps = {
  children?: any;
  cta?: boolean;
  seo?: SEOTypes;
} & typeName;

const Base = (props: BaseProps) => {
  const { children, cta = true, seo } = props;
  const includeContact: boolean = cta !== false;
  const hasChildren: boolean = children?.length > 0;

  return (
    <React.Fragment>
      {seo && <SEO {...seo} />}
      <div className="wrapper">
        <Header />
        {hasChildren && children}
        <InnerContent {...props} />
        {includeContact && <Contact />}
        <Footer />
      </div>
    </React.Fragment>
  );
};

const InnerContent: React.FC<any> = (props: any) => {
  const { postType } = props;
  let innerContents = null;

  switch (postType) {
    case `case`:
      innerContents = <Case {...props} />;
      break;
    case `page`:
      innerContents = <Page {...props} />;
      break;
    case `post`:
      innerContents = <Post {...props} />;
      break;
    case `series`:
      innerContents = <Series {...props} />;
      break;
  }

  return <main>{innerContents}</main>;
};

export default Base;
