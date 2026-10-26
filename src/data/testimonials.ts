export interface Testimonial {
  id: string;
  customer_name: string;
  rating: number;
  review_text: string;
  service_label: string;
}

// Real customer reviews only. Add new ones here (no database needed).
// The Supabase "testimonials" table is no longer used.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'alex-m',
    customer_name: 'Alex M., Molalla OR',
    rating: 5,
    review_text:
      'Quick, efficient service made junk removal easy. Their top-notch customer service is highly recommended!',
    service_label: 'Junk Removal',
  },
];
