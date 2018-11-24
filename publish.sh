s3cmd -c ~/.s3cfg_frontendmatter_demos del s3://learnplus.frontendmatter.com/**/**/* &&
s3cmd -c ~/.s3cfg_frontendmatter_demos sync -MP dist/ s3://learnplus.frontendmatter.com &&
s3cmd -c ~/.s3cfg_frontendmatter_demos put -P --mime-type=text/css dist/assets/css/*.css s3://learnplus.frontendmatter.com/assets/css/ &&
s3cmd -c ~/.s3cfg_frontendmatter_demos put -P --mime-type=text/css dist/assets/vendor/*.css s3://learnplus.frontendmatter.com/assets/vendor/