import type { Schema, Struct } from '@strapi/strapi';

export interface AboutValues extends Struct.ComponentSchema {
  collectionName: 'components_about_values';
  info: {
    displayName: 'values';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AnalyticFeatures extends Struct.ComponentSchema {
  collectionName: 'components_analytic_features';
  info: {
    displayName: 'features';
  };
  attributes: {};
}

export interface CourseFeatures extends Struct.ComponentSchema {
  collectionName: 'components_course_features';
  info: {
    displayName: 'features';
  };
  attributes: {};
}

export interface HomeNeeds extends Struct.ComponentSchema {
  collectionName: 'components_home_needs';
  info: {
    displayName: 'needs';
  };
  attributes: {
    btn_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeReasons extends Struct.ComponentSchema {
  collectionName: 'components_home_reasons';
  info: {
    displayName: 'reasons';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    analytics: Schema.Attribute.Relation<'oneToMany', 'api::analytic.analytic'>;
    btn_text: Schema.Attribute.String;
    consultations: Schema.Attribute.Relation<
      'oneToMany',
      'api::consultation.consultation'
    >;
    courses: Schema.Attribute.Relation<'oneToMany', 'api::course.course'>;
    description: Schema.Attribute.Text;
    header: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    author: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.values': AboutValues;
      'analytic.features': AnalyticFeatures;
      'course.features': CourseFeatures;
      'home.needs': HomeNeeds;
      'home.reasons': HomeReasons;
      'home.services': HomeServices;
      'home.testimonials': HomeTestimonials;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
