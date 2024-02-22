# Medical Imaging Viewer



## About the Application

This application is a specialized medical tool designed for healthcare professionals to view and analyze X-ray images. It provides an intuitive interface for navigating through medical imaging data, supporting the decision-making process in diagnostics and treatment planning.

## Key Features

- **View X-ray Images**: Easily load and display X-ray images for examination.

## Installation and Running the Application with Docker

The Medical Imaging Viewer can be easily set up and run on any system with Docker installed. Follow these steps to get started:

### Building the Docker Image

To build the Docker image for the application, open a terminal in the project's root directory and run the following command:

```bash
docker build -t med-spec .
docker run -p 3000:3000 med-spec
