-- Run once after schema.sql. Existing works are preserved.
insert into public.artworks (id,title,year,medium,dimensions,notes,alt,image,position,published) values
('p13','Black hole in the kitchen (Μαύρη τρύπα στην κουζίνα)',2023,'Colored pencil on paper','','','Black hole in the kitchen (Μαύρη τρύπα στην κουζίνα) — colored pencil drawing','/assets/art/p13.jpg',0,true),
('p6','Bioluminescence (Βιοφωταύγεια)',2023,'Colored pencil on paper','','','Bioluminescence (Βιοφωταύγεια) — colored pencil drawing','/assets/art/p6.jpg',1,true),
('p14','Heart 2 Heart',2023,'Colored pencil on paper','','','Heart 2 Heart — colored pencil drawing','/assets/art/p14.jpg',2,true),
('p19','Love / Paranoia',2023,'Colored pencil on paper','','','Love / Paranoia — colored pencil drawing','/assets/art/p19.jpg',3,true),
('p7','Bioluminescence II (Βιοφωταύγεια II)',2023,'Colored pencil on paper','','','Bioluminescence II (Βιοφωταύγεια II) — colored pencil drawing','/assets/art/p7.jpg',4,true),
('p27','I feel safe in my country',2023,'Colored pencil on paper','','','I feel safe in my country — colored pencil drawing','/assets/art/p27.jpg',5,true),
('p15','Things forbidden in your house (Πράγματα που απαγορεύονται στο σπίτι σου)',2023,'Colored pencil on paper','','','Things forbidden in your house (Πράγματα που απαγορεύονται στο σπίτι σου) — colored pencil drawing','/assets/art/p15.jpg',6,true),
('p10','Make them happy with a happy Meal',2023,'Colored pencil on paper','','','Make them happy with a happy Meal — colored pencil drawing','/assets/art/p10.jpg',7,true),
('p11','Untitled (Άτιτλο)',2023,'Colored pencil on paper','','','Untitled (Άτιτλο) — colored pencil drawing','/assets/art/p11.jpg',8,true),
('p29','Η σωτηρία του κόσμου ήταν έναν οργασμό μακριά',2023,'Colored pencil on paper','','','Η σωτηρία του κόσμου ήταν έναν οργασμό μακριά — colored pencil drawing','/assets/art/p29.jpg',9,true)
on conflict(id) do nothing;
