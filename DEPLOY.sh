#!/bin/bash

echo "🚀 UNIVERSAL SPACE LIVE - AUTO DEPLOYMENT"
echo "========================================="
echo ""

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed!"
echo ""

# Step 2: Test build
echo "🏗️  Building for production..."
npm run build
echo "✅ Build successful!"
echo ""

# Step 3: Deploy to Vercel
echo "🌐 Deploying to Vercel..."
npm install -g vercel
vercel --prod

echo ""
echo "🎉 DEPLOYMENT COMPLETE!"
echo "Your live app is ready! 🌌"

