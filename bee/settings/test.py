"""Configurações de teste."""

from .development import *  # noqa: F401, F403

PASSWORD_HASHERS = ['django.contrib.auth.hashers.MD5PasswordHasher']
AUTH_PASSWORD_VALIDATORS = []
