# Security Guidelines

## ✅ What Was Done

### Removed from Repository

The following sensitive files have been removed from both the current state and the entire git history:

- `fix-session-user.js` - contained hardcoded passwords
- `reset-passwords.js` - contained hardcoded passwords
- `check-passwords.js` - contained hardcoded passwords
- `check-users.js` - contained user data
- `update-user-id.js` - contained database operations
- `seed.js` - contained test credentials

### Documentation Updated

- `QUICK_START.md` - removed hardcoded passwords
- `CONVERSATION_SYSTEM_IMPLEMENTATION.md` - removed hardcoded credentials

## 🔒 Security Best Practices

### Environment Variables

**NEVER** commit these files:

- `.env`
- `.env.local`
- `.env.production`
- Any file containing API keys, secrets, or passwords

### Sensitive Information to Protect

1. **Database URLs** - Keep in `.env` only
2. **API Keys** - OpenAI, Pusher, SendGrid, etc.
3. **Auth Secrets** - NEXTAUTH_SECRET, JWT secrets
4. **SMTP Credentials** - Email passwords
5. **Private Keys** - SSL certificates, SSH keys

### What's Already Protected

✅ `.gitignore` includes:

```
.env*
*.pem
```

✅ Sensitive scripts now in `.gitignore`:

```
fix-session-user.js
reset-passwords.js
check-passwords.js
check-users.js
update-user-id.js
seed.js
```

## 🚨 If You Accidentally Commit Secrets

### Immediate Actions:

1. **Rotate ALL exposed credentials immediately**

   - Change database passwords
   - Regenerate API keys
   - Update NEXTAUTH_SECRET
   - Reset SMTP passwords

2. **Remove from git history**

   ```bash
   # Use git filter-branch (what we did)
   git filter-branch --force --index-filter \
     'git rm --cached --ignore-unmatch SECRET_FILE' \
     --prune-empty --tag-name-filter cat -- --all

   # Force push
   git push origin --force --all

   # Clean up
   rm -rf .git/refs/original/
   git reflog expire --expire=now --all
   git gc --prune=now --aggressive
   ```

3. **GitHub specific**: Contact GitHub support to clear cache if needed

## 📋 Setup Checklist

### For New Developers:

- [ ] Copy `.env.example` to `.env.local`
- [ ] Fill in real credentials (never commit)
- [ ] Use strong, unique passwords for all accounts
- [ ] Never share credentials in Slack/Discord/Email
- [ ] Use a password manager

### For Production:

- [ ] Use Vercel environment variables
- [ ] Enable 2FA on all services
- [ ] Rotate secrets regularly
- [ ] Monitor for exposed secrets using tools like:
  - GitHub Secret Scanning
  - GitGuardian
  - TruffleHog

## 🔑 Recommended Password Policy

### For Demo/Development:

- Minimum 12 characters
- Mix of uppercase, lowercase, numbers, symbols
- **Never** use "admin123", "password", etc.

### For Production:

- Minimum 16 characters
- Use password manager to generate
- Enable MFA/2FA everywhere possible
- Rotate every 90 days

## 📞 Security Contacts

If you discover a security vulnerability:

1. **DO NOT** create a public GitHub issue
2. Email: [Your security contact email]
3. Report to GitHub Security Advisory (for critical issues)

## ✨ Safe Development

### Example `.env.local` structure:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# Auth
NEXTAUTH_SECRET="generate-with: openssl rand -base64 32"
NEXTAUTH_URL="http://localhost:3000"

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"

# Optional Services
OPENAI_API_KEY="sk-..."
PUSHER_APP_ID="..."
PUSHER_KEY="..."
PUSHER_SECRET="..."
PUSHER_CLUSTER="..."
```

---

**Last Updated**: November 26, 2025
**Security Review**: Completed - All sensitive data removed from history
