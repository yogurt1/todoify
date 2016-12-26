def yarn(task)
    sh "yarn #{task}"
end

namespace :frontend do
    desc "Bundle for production"
    task :build => :clean do
        yarn "build"
    end

    desc "Run with livereload"
    task :dev => :clean do
        yarn "dev"
    end

    desc "Run tests"
    task :test do
        yarn "test"
    end

    desc "Install dependencies"
    task :install do
        yarn "install"
    end

    desc "Clean assets"
    task :clean do    
        sh "rm -f public/assets/*"
    end

end
