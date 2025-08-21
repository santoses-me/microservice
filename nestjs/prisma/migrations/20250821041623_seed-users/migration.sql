INSERT INTO `User` (`id`, `email`, `name`, `createdAt`, `updatedAt`)
VALUES
    ('usr_ada',   'ada@example.com',   'Ada Lovelace',   NOW(), NOW()),
    ('usr_linus', 'linus@example.com', 'Linus Torvalds', NOW(), NOW()),
    ('usr_grace', 'grace@example.com', 'Grace Hopper',   NOW(), NOW())
    ON DUPLICATE KEY UPDATE
                         `name` = VALUES(`name`),
                         `updatedAt` = VALUES(`updatedAt`);