// Static API - no HTTP calls, all data is local
import type {
  Collection,
  Destination,
  Trip,
  Article,
  FAQ,
  Review,
  BookingDraft,
  TripFilters,
} from '../types';
import {
  staticCollections,
  staticDestinations,
  staticTrips,
  staticArticles,
  staticFAQs,
  staticReviews,
} from '../data/static';

// Helper function to filter trips
function filterTrips(trips: Trip[], filters?: TripFilters): Trip[] {
  if (!filters) return trips;
  
  return trips.filter((trip) => {
    if (filters.region && trip.region !== filters.region) return false;
    if (filters.country && trip.country !== filters.country) return false;
    if (filters.pace && trip.pace !== filters.pace) return false;
    if (filters.duration) {
      const [min, max] = filters.duration.split('-').map(Number);
      if (min && trip.durationDays < min) return false;
      if (max && trip.durationDays > max) return false;
    }
    if (filters.priceMin && trip.priceFrom < filters.priceMin) return false;
    if (filters.priceMax && trip.priceFrom > filters.priceMax) return false;
    return true;
  });
}

export const api = {
  // Collections - static data
  getCollections: async (): Promise<Collection[]> => {
    return Promise.resolve(staticCollections);
  },

  getCollection: async (slug: string): Promise<Collection> => {
    const collection = staticCollections.find((c) => c.slug === slug);
    if (!collection) {
      throw new Error(`Collection not found: ${slug}`);
    }
    return Promise.resolve(collection);
  },

  // Trips - static data with filtering
  getTrips: async (filters?: TripFilters): Promise<Trip[]> => {
    const filtered = filterTrips(staticTrips, filters);
    return Promise.resolve(filtered);
  },

  getTrip: async (slug: string): Promise<Trip> => {
    const trip = staticTrips.find((t) => t.slug === slug);
    if (!trip) {
      throw new Error(`Trip not found: ${slug}`);
    }
    return Promise.resolve(trip);
  },

  // Destinations - static data
  getDestinations: async (): Promise<Destination[]> => {
    return Promise.resolve(staticDestinations);
  },

  getDestination: async (slug: string): Promise<Destination> => {
    const destination = staticDestinations.find((d) => d.slug === slug);
    if (!destination) {
      throw new Error(`Destination not found: ${slug}`);
    }
    return Promise.resolve(destination);
  },

  // Journal - static data
  getArticles: async (): Promise<Article[]> => {
    return Promise.resolve(staticArticles);
  },

  getArticle: async (slug: string): Promise<Article> => {
    const article = staticArticles.find((a) => a.slug === slug);
    if (!article) {
      throw new Error(`Article not found: ${slug}`);
    }
    return Promise.resolve(article);
  },

  // FAQs - static data
  getFAQs: async (): Promise<FAQ[]> => {
    return Promise.resolve(staticFAQs);
  },

  // Reviews - static data
  getReviews: async (tripSlug?: string): Promise<Review[]> => {
    if (tripSlug) {
      return Promise.resolve(staticReviews.filter((r) => r.tripSlug === tripSlug));
    }
    return Promise.resolve(staticReviews);
  },

  // Newsletter - mock success (no actual submission)
  subscribeNewsletter: async (email: string): Promise<{ success: boolean }> => {
    console.log('Newsletter subscription (mock):', email);
    return Promise.resolve({ success: true });
  },

  // Lead generation - mock success (no actual submission)
  submitLead: async (data: {
    email: string;
    name?: string;
    message?: string;
  }): Promise<{ success: boolean }> => {
    console.log('Lead submission (mock):', data);
    return Promise.resolve({ success: true });
  },

  // Booking drafts - mock implementation
  createDraft: async (data: Partial<BookingDraft>): Promise<BookingDraft> => {
    const draft: BookingDraft = {
      id: `draft-${Date.now()}`,
      tripSlug: data.tripSlug || '',
      startDate: data.startDate,
      startFrom: data.startFrom,
      people: data.people || 2,
      rooms: data.rooms || 1,
      filters: data.filters,
      createdAt: new Date().toISOString(),
    };
    // Store in localStorage for persistence
    const drafts = JSON.parse(localStorage.getItem('bookingDrafts') || '[]');
    drafts.push(draft);
    localStorage.setItem('bookingDrafts', JSON.stringify(drafts));
    return Promise.resolve(draft);
  },

  getDraft: async (id: string): Promise<BookingDraft> => {
    const drafts = JSON.parse(localStorage.getItem('bookingDrafts') || '[]');
    const draft = drafts.find((d: BookingDraft) => d.id === id);
    if (!draft) {
      throw new Error(`Draft not found: ${id}`);
    }
    return Promise.resolve(draft);
  },
};

