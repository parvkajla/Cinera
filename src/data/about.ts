export interface StudioFeature {
  id: string;
  category: string;
  title: string;
  description: string;
  specs: string;
  imageUrl: string;
}

export const STUDIO_FEATURES_DATA: StudioFeature[] = [
  {
    id: 'feat-1',
    category: 'GEAR LAB & CAMERA VAULT',
    title: 'Anamorphic & Cinema Glass',
    description: 'Access to cinema camera bodies, prime lenses, anamorphic adaptors, wireless focus systems, and heavy-duty camera support rigs.',
    specs: '4K DCI • Dual Native ISO • Wireless Video Village',
    imageUrl: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'feat-2',
    category: 'POST-PRODUCTION BAY',
    title: 'Editing & DaVinci Color Suites',
    description: 'High-performance workstations configured with calibrated OLED reference monitors for 4K color grading, audio mixing, and visual effects.',
    specs: 'Calibrated Color • 5.1 Surround Sound • High-Speed Storage',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'feat-3',
    category: 'BLACKBOX PROJECTION LOUNGE',
    title: 'Acoustic Screening Room',
    description: 'An intimate sound-treated screening space where directors host table reads, test rough cuts, and showcase finished festival short films.',
    specs: '4K Projection • 120" Screen • Acoustic Treatments',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'feat-4',
    category: 'COLLECTIVE APPAREL & MERCH',
    title: 'Field Apparel & Director Kits',
    description: 'Matte black film crew jackets, embroidered lens pouches, slate badges, and field notebooks designed for on-set utility.',
    specs: 'Custom Crew Gear • Field Utility • Collective Badges',
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800'
  }
];
