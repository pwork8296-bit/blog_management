"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHeader from "@/app/components/web/PageHeader";
import BlogDetail from "@/app/components/web/BlogDetail";
import BlogSidebar from "@/app/components/web/BlogSidebar";
import RelatedBlogs from "@/app/components/web/RelatedBlogs";
import { BlogItem, getBlogBySlug, getBlogById, getBlogs } from "@/app/services/blogService";
import { ClientItem, getClientById } from "@/app/services/clientService";

const sampleBlog: BlogItem = {
  id: 1,
  client_id: 1,
  title: "Modern Architecture & Sustainable Construction Innovations in 2026",
  slug: "modern-architecture-sustainable-construction-innovations-2026",
  excerpt:
    "An in-depth exploration of next-generation building envelopes, circular materials, and biophilic design standards shaping future developments.",
  content: `
    <p class="lead">
      The construction landscape in 2026 is experiencing a technological and ecological renaissance. With rapid urbanization and intensifying global sustainability benchmarks, the architectural and building sectors are turning towards advanced materials, modular engineering, and integrated renewable technologies.
    </p>

    <h3 class="fw-bold mt-4 mb-3 text-dark">1. Smart Facades &amp; Kinetic Solar Envelopes</h3>
    <p>
      Modern building facades are no longer passive barriers; they are intelligent environmental filters. Utilizing double-skin curtain walls, automated solar louvers, and aerogel-infused insulation materials, contemporary developments can reduce seasonal HVAC loads by up to 42%.
    </p>
    <p>
      Dynamic shading systems adjust their geometry in real-time according to the sun's azimuth, maximizing natural daylight illumination while minimizing unwanted heat gain.
    </p>

    <div class="my-4 p-4 rounded bg-light border-start border-4 border-primary">
      <h5 class="fw-bold text-dark mb-1">Key Performance Metric</h5>
      <p class="mb-0 text-muted">
        Buildings utilizing kinetic shading envelopes demonstrate an average 38% reduction in peak cooling energy requirements across tropical and temperate zones.
      </p>
    </div>

    <h3 class="fw-bold mt-4 mb-3 text-dark">2. High-Performance Bio-Concrete &amp; Low-Carbon Steel</h3>
    <p>
      Embodied carbon reduction has become the primary design objective for Tier-1 contractors. Ground granulated blast-furnace slag (GGBS) and fly ash replacements are now standard in high-strength foundation mixes, cutting the carbon footprint of structural pours by over 50%.
    </p>
    <p>
      Furthermore, self-healing bio-concrete infused with bacterial spores capable of sealing micro-cracks automatically extends structural lifespans and reduces long-term maintenance costs drastically.
    </p>

    <h3 class="fw-bold mt-4 mb-3 text-dark">3. The Future: Regenerative Urban Communities</h3>
    <p>
      True sustainability extends beyond individual structures to interconnected urban ecosystems. By pairing on-site stormwater recycling, green living roofs, and decentralized microgrids, modern infrastructure projects create spaces that actively restore rather than deplete natural resources.
    </p>
  `,
  featured_image: "/assets/img/banner-1.jpg",
  status: 1,
  published_at: new Date().toISOString(),
  meta_title: "Modern Architecture & Sustainable Construction Innovations 2026",
  meta_description: "Learn how modern materials and sustainable envelopes are revolutionizing construction.",
};

const sampleClient: ClientItem = {
  id: 1,
  name: "Gita Construction Group",
  website_name: "Gita Construction Official",
  website_url: "https://www.gitaconstruction.com",
  domain: "gitaconstruction.com",
  logo: "",
  default_meta_title: "Gita Construction - High Performance Engineering",
  default_meta_description:
    "Leading commercial infrastructure and sustainable residential building contractors.",
  status: 1,
};

function BlogPreviewContent() {
  const searchParams = useSearchParams();
  const slugParam = searchParams.get("slug");
  const idParam = searchParams.get("id");

  const [blog, setBlog] = useState<BlogItem>(sampleBlog);
  const [client, setClient] = useState<ClientItem | null>(sampleClient);
  const [recentBlogs, setRecentBlogs] = useState<BlogItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(Boolean(slugParam || idParam));

  useEffect(() => {
    const fetchLiveBlog = async () => {
      try {
        setIsLoading(true);
        let fetchedBlog: BlogItem | null = null;

        if (slugParam) {
          fetchedBlog = await getBlogBySlug(slugParam, "").catch(() => null);
        } else if (idParam) {
          fetchedBlog = await getBlogById(Number(idParam), "").catch(() => null);
        }

        if (fetchedBlog) {
          setBlog(fetchedBlog);
          if (fetchedBlog.client_id) {
            const clientData = await getClientById(fetchedBlog.client_id, "").catch(() => null);
            if (clientData) setClient(clientData);
          }
        }

        // Fetch recent blogs for sidebar
        const allBlogs = await getBlogs({ limit: 4 }, "").catch(() => ({ blogs: [] }));
        if (allBlogs?.blogs) {
          setRecentBlogs(allBlogs.blogs);
        }
      } catch (err) {
        console.error("Failed to load live preview blog:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLiveBlog();
  }, [slugParam, idParam]);

  return (
    <>
      <PageHeader
        title={blog.title || "Blog Preview"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blog-preview" },
          { label: "Article Preview" },
        ]}
      />

      <div className="container-fluid py-5 mt-4">
        <div className="container py-4">
          <div className="row g-4">
            <BlogDetail blog={blog} client={client} />
            <BlogSidebar client={client} recentBlogs={recentBlogs} />
          </div>

          <RelatedBlogs blogs={recentBlogs} />
        </div>
      </div>
    </>
  );
}

export default function BlogPreviewPage() {
  return (
    <Suspense
      fallback={
        <div className="container py-5 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading blog preview...</span>
          </div>
        </div>
      }
    >
      <BlogPreviewContent />
    </Suspense>
  );
}
