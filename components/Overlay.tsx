
import React from 'react';
import { Scroll } from '@react-three/drei';

export const Overlay: React.FC = () => {
  return (
    <Scroll html>
      {/* ========================================
          PHASE 1: INTRO & BRANDING (Pages 1-3)
          Scroll: 0.00 - 0.05
          3D: Voxels in sphere with breathing animation
      ========================================= */}
      
      {/* Section 1: Introduction */}
      <div className="relative w-screen h-screen flex flex-col justify-center items-center text-white p-6 md:p-10 pointer-events-none">
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 opacity-90 text-center uppercase">
            ABI <br/> <span className="text-cyan-400">Automated Business Intelligence</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-60 max-w-md text-center px-4">
            Custom AI automations for healthcare operations. Done-for-you solutions, not DIY software.
          </p>
        </div>
        <div className="absolute bottom-10 flex flex-col items-center animate-bounce opacity-50">
            <p className="text-xs font-bold tracking-widest uppercase mb-2">Scroll Down</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
        </div>
      </div>

      {/* Section 2: Dissolution */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
          <div className="max-w-lg text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-cyan-400">TRANSFORMATION</h2>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed opacity-80">
                Turn spreadsheets, reports, and routine tasks <br/>
                into quiet, reliable automations.
            </p>
          </div>
      </div>

      {/* Section 2.5: Reconstruction */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
          <div className="max-w-lg text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-cyan-400">HEALTHCARE OPERATIONS</h2>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed opacity-80">
                Tailored AI workflows for healthcare. <br/>
                Built, tested, and maintained for you.
            </p>
          </div>
      </div>

      {/* ========================================
          PHASE 2: EXPLOSION (Pages 4-5)
          Scroll: 0.05 - 0.30
          3D: Voxels explode outward, papers fly out
      ========================================= */}

      {/* Section 3: Assembly (Text removed to reveal 3D Logo) */}
      <div className="w-screen h-[100vh] flex flex-col justify-center items-center text-white pointer-events-none">
        {/* Content removed to reveal the 3D Voxel Logo */}
      </div>

      {/* Empty spacer for blob passthrough phase */}
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>

      {/* ========================================
          PHASE 3: LOGO ASSEMBLY (Pages 6-10)
          Scroll: 0.30 - 0.79
          3D: Voxels reassemble into "ABI" text
      ========================================= */}

      {/* Additional spacers to keep logo visible longer */}
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>
      
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>
      
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>
      
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>
      
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>

      {/* ========================================
          PHASE 4: HYPERSPACE DIVE (Pages 11-15)
          Scroll: 0.80 - 0.98
          3D: Camera flies through logo, stars accelerate, blobs pass by
      ========================================= */}

      {/* Extended scroll past frozen stars - spacer 1 */}
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>

      {/* Extended scroll past frozen stars - spacer 2 */}
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>

      {/* Extended scroll past frozen stars - spacer 3 */}
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>

      {/* Extended scroll past frozen stars - spacer 4 */}
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>

      {/* Extended scroll past frozen stars - spacer 5 */}
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>

      {/* Extended scroll past frozen stars - spacer 6 */}
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>

      {/* Extended scroll past frozen stars - spacer 7 */}
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>

      {/* Extended scroll past frozen stars - spacer 8 */}
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>

      {/* Extended scroll past frozen stars - spacer 9 */}
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>

      {/* Extended scroll past frozen stars - spacer 10 */}
      <div className="w-screen h-[100vh] pointer-events-none">
      </div>

      {/* ========================================
          PHASE 5: CONTENT SECTIONS (Pages 16-48)
          Scroll: 0.98+
          3D: Animation complete, stars frozen
          Content: Value propositions
      ========================================= */}

      {/* Section: Hidden labor */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Hidden labor in healthcare operations
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Every week, skilled staff spend hours reformatting exports, reconciling spreadsheets, and preparing the same reports.
            That hidden labor compounds — and it's what we automate first.
          </p>
        </div>
      </div>
      
      {/* New Section: What we automate */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            What we automate
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            The "boring but critical" work: payer report cleanup, census exports, billing packets,
            spreadsheet reconciliation, weekly dashboards, and recurring compliance logs.
          </p>
          <p className="text-sm sm:text-base opacity-60 mt-4">
            If it lives in spreadsheets and repeats every day/week/month — it's a good candidate.
          </p>
        </div>
      </div>
      
      {/* Section: Why automation breaks */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Why most automations fail
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            They're built for ideal conditions. Then a column name changes, a payer tweaks their format, or someone emails a .xlsx instead of .csv.
            We design for those edge cases from day one.
          </p>
        </div>
      </div>
      {/* Section: ABI philosophy */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            The ABI approach
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Boring is better. Predictable is powerful. We build quiet systems that run in the background,
            alert only when needed, and get more reliable with every iteration.
          </p>
        </div>
      </div>
      {/* Spacer 15 */}
      <div className="w-screen h-[100vh] pointer-events-none"></div>
      
      {/* New Section: Fits your stack */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Fits your current stack
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            We work with the tools you already use — email, spreadsheets, shared drives, CRMs, and portals —
            and automate the handoffs that normally require manual copy/paste.
          </p>
          <p className="text-sm sm:text-base opacity-60 mt-4">
            No platform migration. No "rebuild everything" project.
          </p>
        </div>
      </div>
      
      {/* Section: Human checkpoints */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Human-in-the-loop when it matters
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Not everything should run fully automated. We build approval gates and review checkpoints
            for high-stakes outputs — then let the routine work run unattended.
          </p>
        </div>
      </div>
      {/* Section: Messy exports */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Built for messy healthcare data
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Merged cells. Inconsistent headers. Multiple tabs per file. Date formats that change mid-sheet.
            We've seen it all — and we design workflows that handle the chaos gracefully.
          </p>
        </div>
      </div>
      {/* Spacer 19 */}
      <div className="w-screen h-[100vh] pointer-events-none"></div>
      
      {/* New Section: Reliable by design */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Reliable by design
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Automations should be boring: predictable outputs, clear logs, and alerts only when something needs attention.
            We validate against your real files and edge cases — then keep improving over time.
          </p>
        </div>
      </div>
      
      {/* Section: Maintainability */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Maintained for the long term
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Your business changes. Payers update their requirements. ABI automations evolve with you —
            we monitor, adjust, and improve workflows as your operations shift.
          </p>
        </div>
      </div>
      {/* Section: Staff turnover */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Resilient to staff turnover
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            When someone leaves, their spreadsheet expertise leaves with them. Automations stay.
            We document every workflow and ensure continuity even when teams change.
          </p>
        </div>
      </div>
      {/* Spacer 23 */}
      <div className="w-screen h-[100vh] pointer-events-none"></div>
      
      {/* New Section: Healthcare-aware */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Built for healthcare realities
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Messy exports. Changing payer formats. Manual exceptions. We design workflows that handle the real world —
            with guardrails, approvals when needed, and audit-friendly output trails.
          </p>
        </div>
      </div>
      
      {/* Section: Scheduling */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Runs on your schedule
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Daily census reports at 7am. Weekly billing packets every Friday. Monthly reconciliation on the 1st.
            Automations run when you need them — no manual triggering required.
          </p>
        </div>
      </div>
      {/* Section: Auditability */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Clear audit trails
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Every automation logs what it processed, what changed, and when it ran.
            If you need to trace a decision or validate an output, the evidence is there.
          </p>
        </div>
      </div>
      {/* Section: Error costs */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            The real cost of manual errors
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            One missed census entry. One billing discrepancy. One misformatted payer report.
            Errors cascade — and fixing them takes more time than the original task.
          </p>
          <p className="text-sm sm:text-base opacity-60 mt-4">
            Automation reduces those risks to near-zero.
          </p>
        </div>
      </div>
      {/* Section: Incremental rollout */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Start small, expand gradually
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            We don't boil the ocean. Begin with one painful workflow — validate it works —
            then layer in more automations as your team gains confidence.
          </p>
        </div>
      </div>
      {/* Section: Compounding value */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Automation compounds
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            The first automation saves hours. The second builds on that foundation. By the fifth,
            your team has reclaimed entire workdays — and the value keeps growing.
          </p>
        </div>
      </div>
      {/* Section: vs DIY tools */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            ABI vs DIY automation tools
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Tools give you a platform. ABI gives you working automations.
            Your team doesn't become automation experts — they get their time back.
          </p>
        </div>
      </div>
      {/* Section: vs hiring */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            ABI vs hiring an automation engineer
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Hiring takes months. Onboarding takes longer. Then they're building from scratch with no healthcare context.
            ABI ships faster — and brings years of healthcare operations experience built in.
          </p>
        </div>
      </div>
      {/* Section: Calm operations */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Operations should be calm
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            No urgent Slack messages at 5pm. No weekend catch-up work. No "someone has to manually fix this" alerts.
            Just quiet, predictable workflows that run themselves.
          </p>
        </div>
      </div>
      {/* Section: Time to value */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Weeks to working automation
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Discovery, design, build, test, deploy. Most workflows go live in 2-4 weeks.
            No six-month projects. No endless requirements gathering.
          </p>
        </div>
      </div>
      {/* Section: No platform lock-in */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            No platform lock-in
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            You're not migrating to a new tool. ABI integrates with what you already use —
            email, Excel, Salesforce, shared drives, portals — and connects the gaps.
          </p>
        </div>
      </div>
      {/* Section: Validation loops */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Built-in validation
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Before any output goes live, we validate against expected patterns, flag anomalies,
            and surface edge cases. Automation shouldn't mean blind trust.
          </p>
        </div>
      </div>
      {/* Section: Error handling */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Graceful error handling
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            When something goes wrong, the automation doesn't crash silently. It logs the issue,
            alerts the right person, and provides context for a quick fix.
          </p>
        </div>
      </div>
      {/* Section: Versioning */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Version control for workflows
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Every change to an automation is tracked. If something breaks after an update,
            we roll back instantly. No guesswork, no downtime.
          </p>
        </div>
      </div>
      {/* Section: Documentation */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Living documentation
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Every automation comes with clear documentation: what it does, when it runs,
            what inputs it expects, and where outputs go. Updated as the workflow evolves.
          </p>
        </div>
      </div>
      {/* Section: Scalability */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Scales with your growth
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            Today it's 5 facilities. Next year it's 20. ABI workflows scale across multiple locations,
            handle increased volume, and adapt to new requirements without rebuilding.
          </p>
        </div>
      </div>
      {/* Section: Real-world testing */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Tested on your actual files
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            We don't build in a vacuum. Every automation is validated against your real exports,
            historical data, and edge cases before it goes live.
          </p>
        </div>
      </div>

      {/* Section: Transparent pricing */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            Predictable costs
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            No surprise fees. No per-seat charges. You pay for the automations we build and maintain —
            simple, fixed pricing that scales with value delivered.
          </p>
        </div>
      </div>

      {/* Section: Partner not vendor */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
        <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">
            A partner, not just a vendor
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
            We're invested in your operations getting easier, not just delivering a project and disappearing.
            ABI grows with you as your automation needs evolve.
          </p>
        </div>
      </div>

      {/* ========================================
          PHASE 6: WHAT WE DO (Pages 49-52)
          Process steps 1-4
      ========================================= */}

      {/* Section 4: New text after ABI - Left aligned */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none relative">
          <p className="absolute top-20 left-0 right-0 text-xs sm:text-sm text-center opacity-50 uppercase tracking-widest">What we do</p>
          <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">Step 1: Discover your manual workflows</h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
                We meet with your operations and billing teams to identify the repetitive processes stealing your time — from timesheet exports to monthly payer reports.
            </p>
          </div>
      </div>

      {/* Section 5: New text after ABI - Right aligned */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
          <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">Step 2: Design a tailored automation</h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
                We translate those processes into a clear, step-by-step automation, powered by our internal 'patch' framework. You don't worry about prompts or tools. We handle the logic.
            </p>
          </div>
      </div>

      {/* Section 6: Additional text - Left aligned */}
      <div className="w-screen h-[100vh] flex items-center justify-start px-6 sm:px-12 md:px-20 text-white pointer-events-none">
          <div className="max-w-2xl text-left bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">Step 3: Build, test, and validate</h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
                ABI builds the workflow around your real files and systems, then iterates with your team until outputs are accurate, reliable, and ready for production.
            </p>
          </div>
      </div>

      {/* Section 7: Additional text - Right aligned */}
      <div className="w-screen h-[100vh] flex items-center justify-end px-6 sm:px-12 md:px-20 text-white pointer-events-none">
          <div className="max-w-2xl text-right bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-cyan-400">Step 4: Run it quietly in the background</h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80">
                Once live, your automation runs on a schedule or trigger. You get a simple portal to see what ran, what succeeded, and where attention is needed.
            </p>
          </div>
      </div>

      {/* ========================================
          PHASE 7: CTA BRIDGE (Page 53)
      ========================================= */}

      {/* New Section: CTA bridge */}
      <div className="w-screen h-[100vh] flex flex-col justify-center items-center text-white p-6 md:p-10 pointer-events-none">
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center">
            Stop rebuilding the same spreadsheets every week.
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-70 text-center">
            ABI delivers done-for-you automations so your team focuses on operations — not manual workarounds.
          </p>
          <p className="text-xs sm:text-sm opacity-50 mt-6 uppercase tracking-widest text-center">
            Scroll for the ABI vs tools breakdown
          </p>
        </div>
      </div>

      {/* ========================================
          PHASE 8: WHY ABI (Pages 54-58)
          Final comparison and closing
      ========================================= */}

      {/* Section 8: Why ABI Page */}
      <div className="w-screen min-h-screen flex flex-col justify-start items-center text-white p-6 md:p-10 py-20 pointer-events-none">
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center max-w-5xl leading-tight">
            Why teams choose ABI over generic automation tools
          </h1>
        </div>
        
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left side - intro and benefits */}
          <div className="space-y-8 bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-base sm:text-lg opacity-70 leading-relaxed">
              Most tools ask your staff to become mini-developers: learn a platform, build flows, maintain them. <span className="font-bold text-white">ABI flips that model.</span> We deliver fully-managed automations, tailored to healthcare.
            </p>
            
            <div className="space-y-6">
              {/* Benefit 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Done-for-you, not DIY</h3>
                  <p className="text-sm sm:text-base opacity-70">
                    Your team doesn't build flows. We design, implement, and maintain your automations for you.
                  </p>
                </div>
              </div>
              
              {/* Benefit 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Built for healthcare operations</h3>
                  <p className="text-sm sm:text-base opacity-70">
                    We understand messy exports, payer reports, SNF workflows, and the reality of healthcare back offices.
                  </p>
                </div>
              </div>
              
              {/* Benefit 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reusable internal framework</h3>
                  <p className="text-sm sm:text-base opacity-70">
                    Because we structure every project using internal building blocks (PIs & MPIs), we ship faster and maintain more reliably than a typical custom dev shop.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - comparison boxes */}
          <div className="space-y-6">
            {/* Generic automation tool */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Generic automation tool</h3>
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm opacity-60">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Requires your staff to build flows
                </li>
                <li className="flex items-start gap-3 text-sm opacity-60">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Generic integrations, little healthcare context
                </li>
                <li className="flex items-start gap-3 text-sm opacity-60">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Difficult to maintain long-term
                </li>
              </ul>
            </div>
            
            {/* ABI custom automations */}
            <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold">ABI custom automations</h3>
                  <span className="text-xs text-blue-400 font-semibold">Recommended</span>
                </div>
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  We build and run everything for you
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tailored to your reports, exports, and systems
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Supported, monitored, and improved over time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  );
};
