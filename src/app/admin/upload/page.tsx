'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface WorkFormData {
  title: { en: string; de: string };
  year: string;
  medium: string;
  dimensions: string;
  shortDescription: { en: string; de: string };
  longDescription: { en: string; de: string };
  metadata: Array<{ key: string; value: { en: string; de: string } }>;
}

export default function AdminUploadPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState<WorkFormData>({
    title: { en: '', de: '' },
    year: new Date().getFullYear().toString(),
    medium: '',
    dimensions: '',
    shortDescription: { en: '', de: '' },
    longDescription: { en: '', de: '' },
    metadata: [],
  });
  
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [newMetadataKey, setNewMetadataKey] = useState('');
  const [newMetadataValue, setNewMetadataValue] = useState({ en: '', de: '' });

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setAuthenticated(true);
        setAuthToken(password); // Store password as token for API calls
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const formDataToSend = new FormData();
      
      // Add work data
      formDataToSend.append('work', JSON.stringify(formData));
      
      // Add thumbnail
      if (thumbnail) {
        formDataToSend.append('thumbnail', thumbnail);
      }
      
      // Add images
      images.forEach((image) => {
        formDataToSend.append('images', image);
      });

      // Include auth token in headers
      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        // Reset form
        setFormData({
          title: { en: '', de: '' },
          year: new Date().getFullYear().toString(),
          medium: '',
          dimensions: '',
          shortDescription: { en: '', de: '' },
          longDescription: { en: '', de: '' },
          metadata: [],
        });
        setThumbnail(null);
        setImages([]);
        
        // Redirect to works page after 2 seconds
        setTimeout(() => {
          router.push('/works');
        }, 2000);
      } else {
        setError(result.error || 'Failed to upload work');
      }
    } catch (err) {
      setError('Upload failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const addMetadata = () => {
    if (newMetadataKey && newMetadataValue.en) {
      setFormData({
        ...formData,
        metadata: [...formData.metadata, { key: newMetadataKey, value: newMetadataValue }],
      });
      setNewMetadataKey('');
      setNewMetadataValue({ en: '', de: '' });
    }
  };

  const removeMetadata = (index: number) => {
    setFormData({
      ...formData,
      metadata: formData.metadata.filter((_, i) => i !== index),
    });
  };

  if (!authenticated) {
    return (
      <div className="container pt-12 md:pt-16 pb-20">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl mb-6">Admin Access</h1>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-muted bg-background"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 bg-accent text-white disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container pt-12 md:pt-16 pb-20">
      <h1 className="text-3xl mb-8">Upload New Work</h1>

      {success && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded">
          Work uploaded successfully! Redirecting to works page...
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-800 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <section className="space-y-4">
          <h2 className="text-2xl">Basic Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Title (English) *</label>
              <input
                type="text"
                value={formData.title.en}
                onChange={(e) => setFormData({ ...formData, title: { ...formData.title, en: e.target.value } })}
                className="w-full px-4 py-2 border border-muted bg-background"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Title (German)</label>
              <input
                type="text"
                value={formData.title.de}
                onChange={(e) => setFormData({ ...formData, title: { ...formData.title, de: e.target.value } })}
                className="w-full px-4 py-2 border border-muted bg-background"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2">Year *</label>
              <input
                type="text"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="w-full px-4 py-2 border border-muted bg-background"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Medium *</label>
              <input
                type="text"
                value={formData.medium}
                onChange={(e) => setFormData({ ...formData, medium: e.target.value })}
                className="w-full px-4 py-2 border border-muted bg-background"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Dimensions *</label>
              <input
                type="text"
                value={formData.dimensions}
                onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                className="w-full px-4 py-2 border border-muted bg-background"
                placeholder="e.g., 50 × 70 cm"
                required
              />
            </div>
          </div>
        </section>

        {/* Descriptions */}
        <section className="space-y-4">
          <h2 className="text-2xl">Descriptions</h2>
          
          <div>
            <label className="block mb-2">Short Description (English) *</label>
            <textarea
              value={formData.shortDescription.en}
              onChange={(e) => setFormData({ ...formData, shortDescription: { ...formData.shortDescription, en: e.target.value } })}
              className="w-full px-4 py-2 border border-muted bg-background"
              rows={3}
              required
            />
          </div>
          <div>
            <label className="block mb-2">Short Description (German)</label>
            <textarea
              value={formData.shortDescription.de}
              onChange={(e) => setFormData({ ...formData, shortDescription: { ...formData.shortDescription, de: e.target.value } })}
              className="w-full px-4 py-2 border border-muted bg-background"
              rows={3}
            />
          </div>

          <div>
            <label className="block mb-2">Long Description (English)</label>
            <textarea
              value={formData.longDescription.en}
              onChange={(e) => setFormData({ ...formData, longDescription: { ...formData.longDescription, en: e.target.value } })}
              className="w-full px-4 py-2 border border-muted bg-background"
              rows={5}
            />
          </div>
          <div>
            <label className="block mb-2">Long Description (German)</label>
            <textarea
              value={formData.longDescription.de}
              onChange={(e) => setFormData({ ...formData, longDescription: { ...formData.longDescription, de: e.target.value } })}
              className="w-full px-4 py-2 border border-muted bg-background"
              rows={5}
            />
          </div>
        </section>

        {/* Images */}
        <section className="space-y-4">
          <h2 className="text-2xl">Images</h2>
          
          <div>
            <label className="block mb-2">Thumbnail Image *</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
              className="w-full px-4 py-2 border border-muted bg-background"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Additional Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setImages(Array.from(e.target.files || []))}
              className="w-full px-4 py-2 border border-muted bg-background"
            />
            {images.length > 0 && (
              <p className="mt-2 text-sm text-muted">{images.length} image(s) selected</p>
            )}
          </div>
        </section>

        {/* Metadata */}
        <section className="space-y-4">
          <h2 className="text-2xl">Metadata</h2>
          
          <div className="space-y-2">
            {formData.metadata.map((meta, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-muted/20">
                <span className="font-semibold">{meta.key}:</span>
                <span>{meta.value.en || meta.value.de}</span>
                <button
                  type="button"
                  onClick={() => removeMetadata(index)}
                  className="ml-auto text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2">Metadata Key</label>
              <input
                type="text"
                value={newMetadataKey}
                onChange={(e) => setNewMetadataKey(e.target.value)}
                className="w-full px-4 py-2 border border-muted bg-background"
                placeholder="e.g., series, exhibition"
              />
            </div>
            <div>
              <label className="block mb-2">Metadata Value (English)</label>
              <input
                type="text"
                value={newMetadataValue.en}
                onChange={(e) => setNewMetadataValue({ ...newMetadataValue, en: e.target.value })}
                className="w-full px-4 py-2 border border-muted bg-background"
              />
            </div>
            <div>
              <label className="block mb-2">Metadata Value (German)</label>
              <input
                type="text"
                value={newMetadataValue.de}
                onChange={(e) => setNewMetadataValue({ ...newMetadataValue, de: e.target.value })}
                className="w-full px-4 py-2 border border-muted bg-background"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={addMetadata}
            className="px-4 py-2 bg-muted text-foreground hover:bg-muted/80"
          >
            Add Metadata
          </button>
        </section>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-accent text-white disabled:opacity-50"
          >
            {loading ? 'Uploading...' : 'Upload Work'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/works')}
            className="px-6 py-3 border border-muted"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
