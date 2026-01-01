<!-- <?php 
$dataPizza = file_get_contents('../json/pizza.json');
$dataar = json_decode($dataPizza,true);
$dataar = $dataar['menu'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Tambahkan Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <title>pizza store</title>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-6">
        <header class="flex items-center justify-between mb-6">
            <h1 class="text-3xl font-extrabold text-red-600">Pizza Store</h1>
            <p class="text-sm text-gray-600">Pilihan pizza terbaik</p>
        </header>

        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <?php foreach($dataar as $pizza): ?>
                <li class="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                    <img src="../img/pizza/<?php echo $pizza['gambar']; ?>" alt="<?php echo $pizza['nama']; ?>" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h2 class="text-xl font-semibold text-gray-800"><?php echo $pizza['nama']; ?></h2>
                        <p class="text-gray-600 text-sm mt-2"><?php echo $pizza['deskripsi']; ?></p>
                        <div class="mt-4 flex items-center justify-between">
                            <span class="text-lg font-bold text-green-700">Rp. <?php echo number_format($pizza['harga'],000,','); ?></span>
                            <button class="inline-flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                <i class="fas fa-shopping-cart"></i>
                                Add
                            </button>
                        </div>
                    </div>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</body>
</html> -->