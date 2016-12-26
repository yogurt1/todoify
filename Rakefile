# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

namespace :frontend do

    task :build do
        sh "yarn build"
    end

    task :dev do
        sh "yarn dev"
    end

    task :test do
        sh "yarn test"
    end

    task :clean do
        sh "rm -f dist/bundle.js dist/styles.css"
    end
end

