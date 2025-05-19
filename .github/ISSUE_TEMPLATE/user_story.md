name: 🧩 User Story
description: Create a new functional or technical user story
title: "[US] "
labels: []
assignees: []
body:

- type: markdown
  attributes:
  value: | ## 🎯 Objective
  What is the main goal of this user story?

- type: textarea
  id: objective
  attributes:
  label: Objective
  placeholder: Describe the purpose of this US...
  validations:
  required: true

- type: markdown
  attributes:
  value: | ## ✅ Acceptance Criteria
  What must be true for this US to be considered complete?

- type: checkboxes
  id: acceptance
  attributes:
  label: Acceptance Criteria
  options: - label: The user can... - label: The system displays... - label: Input is validated when... - label: A response is returned in...

- type: markdown
  attributes:
  value: | ## ⏱ Time Estimates
  Used for effort tracking and overtime alerts.

- type: input
  id: estimation
  attributes:
  label: Estimated time (hours)
  placeholder: e.g. 4
  validations:
  required: false

- type: input
  id: time_spent
  attributes:
  label: Time spent (optional, can be updated later)
  placeholder: e.g. 6

- type: markdown
  attributes:
  value: | ## 🚦 Priority
  Choose the urgency level of this story.

- type: dropdown
  id: priority
  attributes:
  label: Priority
  options: - low - medium - high - critical

- type: markdown
  attributes:
  value: | ## 🌀 Sprint
  Assign to an active sprint (can be updated in the project view).

- type: input
  id: sprint
  attributes:
  label: Sprint name
  placeholder: e.g. Sprint 2024-W20

- type: markdown
  attributes:
  value: | ## 🔗 Related Links / Context
  Add any useful references (Epic, designs, technical doc, etc.)

- type: textarea
  id: links
  attributes:
  label: Context / Resources
  placeholder: e.g. Related Epic #12, Figma link, etc.
