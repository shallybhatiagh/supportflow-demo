# SupportFlow Demo

AI-assisted support workflow prototype demonstrating ticketing, integrations and troubleshooting.

## What this prototype demonstrates

- Converting a Slack customer conversation into a support ticket
- Capturing issue metadata such as priority, source and ownership
- An AI-assisted troubleshooting response grounded in a fictional knowledge base
- A simple ticket queue
- Integration logs for API and webhook activity
- A simulated `401 Unauthorized` downstream failure with a troubleshooting insight

## Demo scenario

A customer reports that an API integration is failing with a `401` error. The support workflow creates a ticket, surfaces an AI-assisted response, and lets the user trace integration activity to identify the last successful step.

## Tech

Plain HTML, CSS and JavaScript. This is intentionally a lightweight front-end prototype rather than a production helpdesk platform.

## Purpose

Built as a small AI-assisted learning prototype to demonstrate how I think about customer support workflows, SaaS integrations, APIs, and troubleshooting.
