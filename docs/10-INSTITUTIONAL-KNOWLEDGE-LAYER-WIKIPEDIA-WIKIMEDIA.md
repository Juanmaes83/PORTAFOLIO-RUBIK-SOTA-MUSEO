# INSTITUTIONAL KNOWLEDGE LAYER — WIKIPEDIA / WIKIMEDIA

## Decision

The Wikipedia/Wikimedia capability observed in `Juanmaes83/galerium` is NOT discarded.

It is not part of the immediate Rubik Sota personal-portfolio visual uplift, but it is strategically valuable if the product evolves into a reusable solution for museums, galleries, exhibitions, archives or cultural institutions.

Therefore it is classified as a **future institutional stone**, separate from the museum visual skin and from the approved locomotion/focus engine.

---

## Why Galerium matters beyond its 3D gallery

Galerium uses structured data plus Wikipedia/Wikimedia assets to create a museum experience in which artworks are not isolated images. Each work can be accompanied by:

- artist identity;
- period/context;
- dates;
- descriptive story;
- record/facts;
- source links;
- image provenance/license information;
- high-resolution or appropriate-resolution media;
- structured collections and relations.

The important transferable principle is:

> A museum experience becomes more valuable when the visual object, its context, its provenance and its sources are connected in one data model.

For Rubik Sota's personal portfolio, this layer can remain dormant or minimal.
For a museum/gallery product, it can become a major differentiator.

---

## STONE I1 — `InstitutionalKnowledgeAdapter`

Purpose:

Provide an optional enrichment layer that can connect a project/exhibit record to trusted external cultural knowledge sources.

Conceptual contract:

```ts
InstitutionalKnowledgeAdapter {
  entityId
  entityType // artwork | artist | exhibition | movement | place | collection
  title
  summary?
  dates?
  creator?
  institution?
  provenance?
  facts?
  sourceLinks[]
  imageAttribution?
  license?
  externalIds? // Wikipedia/Wikidata/Wikimedia etc.
}
```

This adapter must not own the museum UI. It supplies structured knowledge to whatever visual presentation is active.

---

## STONE I2 — `CulturalSourceRegistry`

Purpose:

Allow future institutional deployments to define which external sources are enabled and trusted.

Initial candidates inspired by Galerium:

- Wikipedia — narrative/context;
- Wikimedia Commons — media and attribution;
- Wikidata — structured identifiers and relationships.

Future institutional versions may add museum-specific APIs or collection-management systems, but those are outside the current phase.

Important rule:

External enrichment must never silently overwrite curator-authored content. Curated institutional content remains PRIMARY; external sources are enrichment/fallback/support.

---

## STONE I3 — `ProvenanceAndRightsBlock`

A museum/gallery version must be capable of displaying, when relevant:

- source;
- copyright/rights status;
- image attribution;
- license;
- external record link;
- provenance/context notes.

Galerium demonstrates that rights/context information can live alongside the inspect experience instead of being buried elsewhere.

This can become commercially important when presenting the platform to institutions.

---

## How this changes the product strategy

We should now think about Rubik Sota Portfolio Museum as two layers:

### A. PERSONAL / AUTHOR MODE

Current product:

- cinematic landing;
- authored 3D world;
- Rubik Sota projects;
- image/video/text;
- semantic landmarks;
- project inspection;
- progress/contact.

### B. INSTITUTIONAL MODE — FUTURE PRODUCTIZATION

Optional expansion:

- artwork/artist/exhibition entities;
- curator-authored text;
- Wikipedia/Wikimedia/Wikidata enrichment;
- provenance and rights metadata;
- source links;
- collection hierarchy;
- institutional branding;
- multilingual cultural content;
- later CMS/admin integration.

This means the current architecture should avoid hard-coding `project` as the only possible entity type. The future content model should be extensible enough to support `project`, `artwork`, `artist`, `exhibition`, `collection` or `artifact` without rewriting the museum engine.

---

## What we should NOT do now

Do not implement Wikipedia/Wikimedia network calls during the current Visual + Navigation Uplift.

Do not mix cultural-data ingestion with camera, material or landmark work.

Do not build an institutional CMS yet.

Do not replace Rubik Sota's own authored content with automatically generated summaries.

The correct move now is architectural preservation: document the capability and make sure Phase 5 stones do not block this future mode.

---

## Commercial value

If the experience is later sold to museums or galleries, this layer improves the proposition because the platform can move from:

```text
3D exhibition viewer
```

to:

```text
IMMERSIVE EXHIBITION EXPERIENCE
+
CURATED KNOWLEDGE
+
TRUSTED EXTERNAL CONTEXT
+
PROVENANCE / RIGHTS
+
MULTIMEDIA INSPECTION
+
INSTITUTIONAL CONTENT MODEL
```

This is a materially stronger product category.

---

## Roadmap placement

Not part of Phase 5 implementation.

Preserve as a future institutional branch after the visual/navigation system and author-content model are stable.

Recommended future sequence:

```text
PHASE 5 — VISUAL + NAVIGATION UPLIFT
↓
PHASE 6 — AUTHOR CONTENT MODEL / CMS INTEGRATION
↓
PHASE 7 — INSTITUTIONAL KNOWLEDGE LAYER
   Wikipedia / Wikimedia / Wikidata adapters
   provenance / rights
   cultural entity model
↓
PHASE 8 — ANALYTICS / ATTENTION / DASHBOARD
```

Phase numbering remains provisional until the current uplift is frozen; the key decision is dependency order, not the label.
