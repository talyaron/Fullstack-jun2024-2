create database if not exists cosmetics;

DROP DATABASE cosmetics;


USE cosmetics;

CREATE table cosmetics(
product_id int auto_increment,
primary key (product_id),
product_name varchar(50),
brand_id varchar(50),
FOREIGN KEY (brand_id) REFERENCES brands(brand_id) ON DELETE SET NULL
);

INSERT INTO cosmetics (product_name, product_brand) VALUES
('Lipstick Rouge Matte', 'L’Oréal'),
('Hydra Foundation', 'Maybelline'),
('Ultra Glow Highlighter', 'Fenty Beauty'),
('Volume Mascara', 'Dior'),
('Silk Touch Blush', 'NARS'),
('Matte Liquid Lipstick', 'MAC'),
('BB Cream Light', 'Garnier'),
('Velvet Eyeshadow Palette', 'Huda Beauty'),
('Skin Perfect Primer', 'Revlon'),
('Waterproof Eyeliner', 'Urban Decay'),
('Glow Serum', 'The Ordinary'),
('Facial Cleanser', 'Cetaphil'),
('Acne Spot Treatment', 'Neutrogena'),
('Setting Spray', 'NYX'),
('Moisturizing Cream', 'Clinique'),
('Night Repair Serum', 'Estée Lauder'),
('Tanning Lotion', 'Bondi Sands'),
('Sun Protection SPF50', 'La Roche-Posay'),
('Anti-Aging Cream', 'Olay'),
('Vitamin C Brightening Serum', 'Drunk Elephant');

select * from cosmetics;