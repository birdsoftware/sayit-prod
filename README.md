---

## 🛠️ Steps

### 1. Build the Web App

From your Flutter project root:

```bash
flutter build web
```
### 2. Update prod from ...\build\web> 
```bash
cd build/web
git add _redirects
git commit -m "Add Netlify routing fix"
git push
