# Siyanda Khanyile - Cloud Resume

A Netflix-inspired portfolio website built as part of the AWS Cloud Resume Challenge.

## 🚀 Features

- ✅ Static website hosted on AWS S3
- ✅ Visitor counter using Lambda, DynamoDB & API Gateway
- ✅ CI/CD pipeline with GitHub Actions
- 🔄 Custom domain with Route 53 (coming soon)
- 🔄 CloudFront CDN for global delivery (coming soon)
- 🔄 SSL certificate with AWS Certificate Manager (coming soon)

## 🛠️ Tech Stack

**Frontend:**
- React
- CSS (Netflix-inspired design)

**Backend:**
- AWS Lambda (Python)
- Amazon DynamoDB
- API Gateway

**Infrastructure:**
- AWS S3 (static hosting)
- GitHub Actions (CI/CD)

## 📦 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build
```

## 🌐 Live Site

[View Live Site](http://siyanda-khanyile-resume.s3-website-us-east-1.amazonaws.com)

## 📝 Architecture

1. React app hosted on S3 as a static website
2. Visitor counter API built with Lambda + DynamoDB
3. API Gateway exposes the Lambda function
4. GitHub Actions automatically deploys on push to main branch

## 👨‍💻 Author

Siyanda Khanyile - Software Engineer
- Email: khanyile.siyanda@outlook.com
- LinkedIn: [linkedin.com/in/siyanda-khanyile-6b6896182](https://linkedin.com/in/siyanda-khanyile-6b6896182)
