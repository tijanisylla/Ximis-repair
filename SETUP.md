# XIMI'S AUTO REPAIR - Setup Guide

## 📋 Prerequisites

### Required Software
1. **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
2. **Python** (v3.11 or higher) - [Download](https://www.python.org/)
3. **MongoDB** (v6.0 or higher) - [Download](https://www.mongodb.com/try/download/community)
4. **Yarn** (v1.22.22) - Already configured in package.json
   - Install: `npm install -g yarn`

### Optional but Recommended
- **Git** - For version control
- **VS Code** or **Cursor** - Code editor

---

## 🚀 Quick Start

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment (recommended)
python3 -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
# The .env file already exists with default values:
# MONGO_URL="mongodb://localhost:27017"
# DB_NAME="test_database"
# CORS_ORIGINS="*"

# Start MongoDB (if not running as a service)
# macOS (using Homebrew):
brew services start mongodb-community
# Linux:
sudo systemctl start mongod
# Windows: MongoDB should start automatically

# Run the backend server
uvicorn server:app --reload --port 8000
```

**Backend will run on:** `http://localhost:8000`

---

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (using Yarn as specified)
yarn install

# Set up environment variables
# The .env file already exists with:
# REACT_APP_BACKEND_URL=https://carwash-portal-5.preview.emergentagent.com
# WDS_SOCKET_PORT=443
# ENABLE_HEALTH_CHECK=false

# For local development, update .env to:
# REACT_APP_BACKEND_URL=http://localhost:8000
# WDS_SOCKET_PORT=3000
# ENABLE_HEALTH_CHECK=false

# Start development server
yarn start
```

**Frontend will run on:** `http://localhost:3000`

---

## 📦 Tech Stack

### Frontend
- **React** 19.0.0 - UI framework
- **React Router DOM** 7.5.1 - Routing
- **Tailwind CSS** 3.4.17 - Styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icons
- **Sonner** - Toast notifications
- **React Hook Form** - Form handling
- **date-fns** 3.6.0 - Date utilities
- **Axios** - HTTP client
- **CRACO** - Create React App Configuration Override

### Backend
- **FastAPI** 0.110.1 - Web framework
- **Uvicorn** 0.25.0 - ASGI server
- **Motor** 3.3.1 - Async MongoDB driver
- **Pydantic** 2.6.4+ - Data validation
- **Python-dotenv** - Environment variables
- **PyJWT** - JWT authentication
- **Bcrypt** - Password hashing

### Database
- **MongoDB** - NoSQL database

---

## 🔧 Environment Variables

### Backend (.env in `/backend/`)
```env
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
CORS_ORIGINS="*"
```

### Frontend (.env in `/frontend/`)
```env
REACT_APP_BACKEND_URL=http://localhost:8000
WDS_SOCKET_PORT=3000
ENABLE_HEALTH_CHECK=false
```

---

## 📁 Project Structure

```
XIMI'S REPAIR/
├── backend/
│   ├── server.py          # FastAPI application
│   ├── requirements.txt   # Python dependencies
│   └── .env              # Backend environment variables
├── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/       # Page components
│   │   ├── data/        # Business data
│   │   └── App.js       # Main app component
│   ├── package.json     # Node dependencies
│   └── .env            # Frontend environment variables
└── README.md
```

---

## 🎯 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light theme toggle
- ✅ Service listings (Auto Repair & Car Wash)
- ✅ Appointment booking form
- ✅ Contact page with map
- ✅ Specials/Offers page
- ✅ Before/After gallery
- ✅ Testimonials carousel
- ✅ Live chat widget (UI ready)
- ✅ SEO-friendly structure

---

## 🧪 Testing

### Backend Tests
```bash
cd backend
pytest
```

### Frontend Tests
```bash
cd frontend
yarn test
```

---

## 🏗️ Building for Production

### Frontend Build
```bash
cd frontend
yarn build
```
Output will be in `frontend/build/`

### Backend Production
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8000
```

---

## 🐛 Troubleshooting

### Issue: MongoDB connection failed
- **Solution:** Ensure MongoDB is running
  ```bash
  # Check MongoDB status
  mongosh --eval "db.adminCommand('ping')"
  ```

### Issue: Port already in use
- **Solution:** Change port or kill process
  ```bash
  # Find process using port 8000
  lsof -i :8000
  # Kill it
  kill -9 <PID>
  ```

### Issue: Yarn install fails
- **Solution:** Clear cache and reinstall
  ```bash
  yarn cache clean
  rm -rf node_modules yarn.lock
  yarn install
  ```

### Issue: Python dependencies fail
- **Solution:** Use Python 3.11+ and ensure pip is updated
  ```bash
  python3 --version  # Should be 3.11+
  pip install --upgrade pip
  pip install -r requirements.txt
  ```

---

## 📝 Notes

- The frontend uses **Yarn** as the package manager (specified in package.json)
- Backend uses **FastAPI** with async MongoDB operations
- Theme system uses Tailwind's dark mode with class-based switching
- All images and business data are stored in `frontend/src/data/business.js`

---

## 🔗 API Endpoints

- `GET /api/` - Health check
- `POST /api/status` - Create status check
- `GET /api/status` - Get all status checks

---

## 📞 Support

For issues or questions, check:
- Backend logs: Console output from uvicorn
- Frontend logs: Browser console (F12)
- MongoDB logs: Check MongoDB service logs

---

## ✅ Checklist for First-Time Setup

- [ ] Install Node.js (v18+)
- [ ] Install Python (v3.11+)
- [ ] Install MongoDB
- [ ] Install Yarn globally
- [ ] Start MongoDB service
- [ ] Clone/download project
- [ ] Set up backend virtual environment
- [ ] Install backend dependencies
- [ ] Configure backend .env
- [ ] Install frontend dependencies
- [ ] Configure frontend .env
- [ ] Start backend server
- [ ] Start frontend server
- [ ] Open http://localhost:3000

---

**Last Updated:** January 2026
