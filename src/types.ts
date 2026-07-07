/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DeveloperData {
  name: string;
  contact: {
    phone: string;
    whatsapp: string;
  };
  community: {
    name: string;
    website: string;
    discord: string;
  };
  website: {
    portfolio: string;
  };
}

export interface RuleItem {
  id: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StaffItem {
  id: string;
  name: string;
  role: 'Owner' | 'Developer' | 'Admin' | 'Helper';
  skinUrl: string;
  avatarUrl?: string;
  description: string;
}
