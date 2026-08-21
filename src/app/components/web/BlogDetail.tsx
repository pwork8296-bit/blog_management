import React, { useState } from "react";
import { BlogItem } from "@/app/services/blogService";
import { ClientItem } from "@/app/services/clientService";
import { getFullImageUrl } from "@/app/utils/utils";

interface BlogDetailProps {
  blog: BlogItem;
  client?: ClientItem | null;
}

export default function BlogDetail({ blog, client }: BlogDetailProps) {
  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentsList, setCommentsList] = useState([
    {
      name: "David Miller",
      date: "August 18, 2026",
      avatar: "/assets/img/avatar.jpg",
      text: "Exceptional insights! The shift towards smart sustainable materials is transforming commercial developments rapidly.",
    },
    {
      name: "Elena Rostova",
      date: "August 19, 2026",
      avatar: "/assets/img/avatar.jpg",
      text: "Very comprehensive breakdown. Loved the section on structural efficiency and thermal envelope design.",
    },
  ]);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    setCommentsList([
      ...commentsList,
      {
        name: commentName,
        date: "Just now",
        avatar: "/assets/img/avatar.jpg",
        text: commentText,
      },
    ]);

    setCommentName("");
    setCommentEmail("");
    setCommentText("");
    setSubmittedMessage(true);
    setTimeout(() => setSubmittedMessage(false), 4000);
  };

  const publishDate = blog.published_at
    ? new Date(blog.published_at).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "August 20, 2026";

  return (
    <div className="col-lg-8 col-xl-9">
      <article className="blog-article bg-white p-4 p-md-5 rounded border shadow-sm mb-5">
        {/* Article Meta Header */}
        <div className="mb-4">
          <div className="d-flex flex-wrap align-items-center gap-3 text-muted small mb-3">
            {client && (
              <span className="badge bg-primary text-white px-3 py-2 rounded-pill font-weight-bold">
                {client.name}
              </span>
            )}
            <span>
              <i className="fa fa-calendar-alt text-primary me-1" />
              {publishDate}
            </span>
            <span>
              <i className="fa fa-user text-primary me-1" />
              By Editorial Team
            </span>
            <span>
              <i className="fa fa-clock text-primary me-1" />5 Min Read
            </span>
            <span>
              <i className="fa fa-comments text-primary me-1" />
              {commentsList.length} Comments
            </span>
          </div>

          <h1 className="fw-bold display-6 text-dark mb-3 lh-sm">
            {blog.title || "Modern Architecture & Sustainable Construction Innovations"}
          </h1>

          {blog.excerpt && (
            <p className="lead text-secondary fst-italic border-start border-4 border-primary ps-3 my-3">
              {blog.excerpt}
            </p>
          )}
        </div>

        {/* Featured Hero Image */}
        <div className="position-relative overflow-hidden rounded mb-4" style={{ maxHeight: "480px" }}>
          <img
            src={
              blog.featured_image
                ? getFullImageUrl(blog.featured_image)
                : "/assets/img/banner-1.jpg"
            }
            alt={blog.title || "Featured Blog Image"}
            className="w-100 h-100 object-fit-cover rounded"
            style={{ maxHeight: "480px", objectFit: "cover" }}
          />
        </div>

        {/* Article Main Body Content */}
        <div className="article-content text-dark lh-lg" style={{ fontSize: "16px" }}>
          {blog.content ? (
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          ) : (
            <>
              <p>
                The commercial and residential construction sectors are undergoing a profound paradigm shift. Driven by advanced computational design, environmental certifications, and high-performance building envelopes, modern architects and builders are unlocking unprecedented levels of durability, energy efficiency, and aesthetic elegance.
              </p>

              <h3 className="fw-bold text-dark mt-4 mb-3">1. Next-Generation Sustainable Building Envelopes</h3>
              <p>
                Modern building facades are no longer passive barriers; they are intelligent environmental filters. Utilizing double-skin curtain walls, automated solar louvers, and aerogel-infused insulation materials, contemporary developments can reduce seasonal HVAC loads by up to 42%.
              </p>

              <blockquote className="p-4 my-4 rounded bg-light border-start border-5 border-primary">
                <p className="mb-2 fw-semibold text-dark">
                  &ldquo;Architecture is the learned game, correct and magnificent, of forms assembled in the light. Today, that magnificence is measured not just in form, but in environmental stewardship.&rdquo;
                </p>
                <footer className="text-muted small">— Urban Design Review 2026</footer>
              </blockquote>

              <h3 className="fw-bold text-dark mt-4 mb-3">2. Smart Structural Materials &amp; Pre-Fabricated Precision</h3>
              <p>
                Off-site modular construction and precast reinforced engineered composites have slashed project turnaround times while nearly eliminating on-site material waste. High-tensile steel alloys paired with self-healing bio-concrete formulas deliver structures engineered to endure generations of climate variation.
              </p>

              <div className="row g-3 my-4">
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded border h-100">
                    <h5 className="fw-bold text-primary mb-2">
                      <i className="fa fa-check-circle me-2" /> Energy Independence
                    </h5>
                    <p className="small text-muted mb-0">
                      Rooftop solar arrays integrated directly into structural membranes generate clean on-site power for critical systems.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded border h-100">
                    <h5 className="fw-bold text-primary mb-2">
                      <i className="fa fa-check-circle me-2" /> Circular Lifecycle
                    </h5>
                    <p className="small text-muted mb-0">
                      Over 85% of structural framing materials are sourced from closed-loop recycled streams.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="fw-bold text-dark mt-4 mb-3">3. Looking Ahead: The Decade of Resilient Spaces</h3>
              <p>
                As urban population densities rise, creating regenerative spaces that prioritize natural daylighting, biophilic integration, and seamless acoustic dampening is no longer a luxury—it is the foundational standard of contemporary engineering excellence.
              </p>
            </>
          )}
        </div>

        {/* Social Share & Tag Footer */}
        <div className="border-top border-bottom py-3 my-4 d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div className="d-flex align-items-center gap-2">
            <span className="fw-bold text-dark small">Tags:</span>
            <span className="badge bg-light text-dark border">#Construction</span>
            <span className="badge bg-light text-dark border">#Architecture</span>
            <span className="badge bg-light text-dark border">#Innovation</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <span className="fw-bold text-dark small">Share:</span>
            <a href="#" className="btn btn-sm btn-outline-primary rounded-circle" title="Share on Twitter/X">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="btn btn-sm btn-outline-primary rounded-circle" title="Share on LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#" className="btn btn-sm btn-outline-primary rounded-circle" title="Share on Facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="btn btn-sm btn-outline-primary rounded-circle" title="Share on WhatsApp">
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="p-4 bg-light rounded d-flex flex-column flex-sm-row align-items-center gap-4 my-4">
          <img
            src="/assets/img/testimonial-1.jpg"
            alt="Author"
            className="rounded-circle border border-3 border-white shadow-sm"
            style={{ width: "90px", height: "90px", objectFit: "cover" }}
          />
          <div>
            <h5 className="fw-bold mb-1 text-dark">Marcus Vance</h5>
            <p className="text-primary small mb-2">Senior Architectural Correspondent &amp; Structural Consultant</p>
            <p className="text-muted small mb-0">
              Marcus writes extensively on sustainable engineering, urban infrastructure, and transformative building technologies. With over 15 years of field experience across European and Asian developments.
            </p>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-5">
          <h4 className="fw-bold text-dark mb-4">
            Responses ({commentsList.length})
          </h4>

          <div className="comments-list mb-4">
            {commentsList.map((c, i) => (
              <div key={i} className="d-flex gap-3 mb-4 pb-3 border-bottom">
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="fw-bold mb-0 text-dark">{c.name}</h6>
                    <span className="text-muted small">{c.date}</span>
                  </div>
                  <p className="text-muted small mb-0">{c.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <div className="p-4 bg-light rounded">
            <h5 className="fw-bold text-dark mb-3">Join the Conversation</h5>

            {submittedMessage && (
              <div className="alert alert-success py-2 small mb-3">
                Thank you! Your comment has been posted.
              </div>
            )}

            <form onSubmit={handleAddComment}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    required
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    placeholder="Your Full Name *"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    value={commentEmail}
                    onChange={(e) => setCommentEmail(e.target.value)}
                    placeholder="Your Email (Optional)"
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    rows={4}
                    required
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write your constructive thoughts or questions here... *"
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary rounded-pill px-4 py-2 text-white">
                    Submit Response
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </article>
    </div>
  );
}
