# 📚 Kiseki Wiki
Personal wiki of the Trails / Kiseki series built with Jekyll and deployed on Vercel.
## 🚀 Description
This project is a wiki dedicated to the Kiseki (Trails Series) universe, organized in a multilingual structure:
- 🇪🇸 Spanish (ES)
- 🇬🇧 English (EN)
- 🇯🇵 Japanese (JP)
The goal is to build a structured, scalable, and easy-to-maintain wiki about the series.
## 🧱 Technologies
- Jekyll (static site generator)
- Markdown (content)
- Liquid (templates)
- Git + GitHub (version control)
- Vercel (automatic deployment)
## 📁 Project structure
es/ → Spanish content
en/ → English content
jp/ → Japanese content
_layouts/ → Page templates
_includes/ → Reusable components (sidebar, header, etc.)
_assets/ → CSS, JS and images
_data/ → Structured data (optional)
Inside each language folder:
sagas/ → Main story arcs
characters/ → Characters
world/ → Game world
lore/ → Story and concepts
items/ → Systems and mechanics
## 💻 Local setup
Install dependencies:
bundle install
Run local server:
bundle exec jekyll serve
Open in browser:
http://127.0.0.1:4000/
## 🌐 Vercel deployment
1. Connect GitHub repository to Vercel
2. Import project
3. Auto deploy on every git push
## 🔄 Workflow
edit content → git add . → git commit → git push → Vercel deploy
## 🎯 Goal
- Complete Kiseki wiki
- Multilingual support (ES / EN / JP)
- Scalable fandom-style structure
- Fast static site
## 🧠 Notes
- Each language is independent
- Built for scalability
- No backend required
## ⚡ Status
In development