# 图像批量放大脚本（2倍，最近邻插值）
# 保存为 Resize-Images.ps1

param(
    [Parameter(Mandatory=$true)]
    [string]$SourceFolder,  # 源图像目录
    
    [string]$OutputFolder = "ResizedImages",  # 输出目录（默认为源目录下的ResizedImages）
    
    [ValidateSet("JPG", "PNG", "BMP", "GIF", "TIF")]
    [string]$OutputFormat = "JPG"  # 输出格式
)

# 加载必要的程序集
Add-Type -AssemblyName System.Drawing

# 创建输出目录
$outputPath = Join-Path $SourceFolder $OutputFolder
if (-not (Test-Path $outputPath)) {
    New-Item -ItemType Directory -Path $outputPath | Out-Null
}

# 获取所有图像文件
$imageFiles = Get-ChildItem -Path $SourceFolder -Include @("*.jpg", "*.jpeg", "*.png", "*.bmp", "*.gif", "*.tif") -Recurse

# 处理计数器
$processed = 0
$total = $imageFiles.Count

foreach ($file in $imageFiles) {
    try {
        # 读取原始图像
        $original = [System.Drawing.Image]::FromFile($file.FullName)
        
        # 计算新尺寸（2倍）
        $newWidth = $original.Width * 2
        $newHeight = $original.Height * 2
        
        # 创建目标位图
        $resized = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        
        # 使用最近邻插值
        $graphics = [System.Drawing.Graphics]::FromImage($resized)
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::NearestNeighbor
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::Half
        
        # 绘制放大图像
        $graphics.DrawImage($original, 0, 0, $newWidth, $newHeight)
        
        # 生成输出路径
        $outputFile = Join-Path $outputPath ($file.BaseName + "." + $OutputFormat.ToLower())
        
        # 保存图像（根据格式选择编码器）
        switch ($OutputFormat.ToUpper()) {
            "JPG" { 
                $resized.Save($outputFile, [System.Drawing.Imaging.ImageFormat]::Jpeg)
            }
            "PNG" {
                $resized.Save($outputFile, [System.Drawing.Imaging.ImageFormat]::Png)
            }
            "BMP" {
                $resized.Save($outputFile, [System.Drawing.Imaging.ImageFormat]::Bmp)
            }
            "GIF" {
                $resized.Save($outputFile, [System.Drawing.Imaging.ImageFormat]::Gif)
            }
            "TIF" {
                $resized.Save($outputFile, [System.Drawing.Imaging.ImageFormat]::Tiff)
            }
        }
        
        # 释放资源
        $original.Dispose()
        $graphics.Dispose()
        $resized.Dispose()
        
        $processed++
        Write-Host "已处理: $($file.Name) → $([System.IO.Path]::GetFileName($outputFile))" -ForegroundColor Green
    }
    catch {
        Write-Host "处理失败: $($file.Name) - $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`n处理完成! $processed/$total 个图像已放大" -ForegroundColor Cyan