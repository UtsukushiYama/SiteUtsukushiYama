-- ============================================================
-- UTSUKUSHI YAMA - Criação das tabelas no banco selecionado
-- Crie o banco pelo painel do InfinityFree e selecione-o no phpMyAdmin antes de importar.
-- ============================================================

-- Selecione o banco no phpMyAdmin antes de importar. InfinityFree cria o banco pelo painel.

-- ============================================================
-- 2. TABELA DE USUÁRIOS
-- ============================================================
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id`             INT UNSIGNED    NOT NULL AUTO_INCREMENT,
  `username`       VARCHAR(100)    NOT NULL,
  `password_hash`  VARCHAR(255)    NOT NULL,
  `nome_display`   VARCHAR(150)    NOT NULL,
  `nivel_acesso`   ENUM('guest','iniciante','intermediario','avancado','admin') NOT NULL DEFAULT 'iniciante',
  `data_expiracao` DATE            NULL COMMENT 'NULL = sem expiração',
  `ativo`          TINYINT(1)      NOT NULL DEFAULT 1,
  `created_at`     DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`     DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `last_login`     DATETIME        NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 3. TABELA DE SESSÕES
-- ============================================================
CREATE TABLE IF NOT EXISTS `sessoes` (
  `id`             INT UNSIGNED    NOT NULL AUTO_INCREMENT,
  `usuario_id`     INT UNSIGNED    NOT NULL,
  `session_token`  VARCHAR(64)     NOT NULL,
  `ip_address`     VARCHAR(45)     NULL,
  `user_agent`     VARCHAR(255)    NULL,
  `created_at`     DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_activity`  DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `expires_at`     DATETIME        NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_token` (`session_token`),
  KEY `idx_usuario` (`usuario_id`),
  KEY `idx_expires` (`expires_at`),
  CONSTRAINT `fk_sessao_usuario`
    FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 4. TABELA DE LOG DE ACESSOS
-- ============================================================
CREATE TABLE IF NOT EXISTS `access_log` (
  `id`          INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  `usuario_id`  INT UNSIGNED  NULL COMMENT 'NULL se login falhou (usuário não encontrado)',
  `username_tentado` VARCHAR(100) NULL COMMENT 'Login digitado na tentativa',
  `evento`      ENUM('login_ok','login_fail','logout','sessao_expirada','acesso_negado') NOT NULL,
  `ip_address`  VARCHAR(45)   NULL,
  `user_agent`  VARCHAR(255)  NULL,
  `detalhes`    VARCHAR(255)  NULL,
  `created_at`  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_usuario` (`usuario_id`),
  KEY `idx_evento` (`evento`),
  KEY `idx_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
