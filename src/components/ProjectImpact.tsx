import type { ProjectImpact as ProjectImpactData } from '../lib/types'

export function ProjectImpact({ impact }: { impact: ProjectImpactData }) {
  return (
    <div className="project-impact">
      <dl>
        <dt className="project-impact-label">{impact.label}</dt>
        <dd className="project-impact-metric">{impact.metric}</dd>
      </dl>
      <p className="project-impact-value">{impact.description}</p>
      {impact.takeaway && <p className="project-impact-takeaway">{impact.takeaway}</p>}
      {impact.supportingCopy && <p className="project-impact-support">{impact.supportingCopy}</p>}
      {impact.disclaimer && <p className="project-impact-disclaimer">{impact.disclaimer}</p>}
    </div>
  )
}
