import { useState } from 'react';
import { ChevronUp, ChevronDown, MessageCircle, Share, MoreHorizontal, Image, Link as LinkIcon, BarChart2 } from 'lucide-react';

export default function Home() {
  const [selectedSort, setSelectedSort] = useState('Best');

  // 模拟更多内容类型的帖子
  const posts = [
    {
      id: 1,
      subreddit: 'r/Bitcoin',
      author: 'u/cryptouser',
      timeAgo: '51 min. ago',
      title: 'Ready to opt the fuck out',
      content: `I don't usually post, but I'm sick and tired of playing their dumb game. I was just sitting on my porch, while a nice evening was marred by news of another fucking war. That puts the cherry on top of a nice week of riots. The game has become obvious and I'm tired of it. I'm tired of plebs everywhere jabbering bullshit at each other, frothing at the fucking mouth, driven to madness by ideas planted in their fucking brains by someone else. While the game masters sit back and laugh as they jerk themselves off to their own power and riches. The game sucks and everyone is feeling it. What is the game..? If you're in this thread and don't know what...`,
      upvotes: 26,
      comments: 14,
      avatarColor: 'bg-orange-500'
    },
    {
      id: 2,
      subreddit: 'r/cursor',
      author: 'u/devuser',
      timeAgo: '21 hr. ago',
      title: 'This extension will save you a lot of fast requests',
      content: '',
      upvotes: 0,
      comments: 0,
      hasImage: true,
      avatarColor: 'bg-gray-800',
      joinButton: true
    },
    {
      id: 3,
      subreddit: 'r/reactjs',
      author: 'u/reactfan',
      timeAgo: '2 hr. ago',
      title: 'React 19 新特性体验',
      content: 'React 19 带来了很多新特性，比如 useOptimistic、action API、全新的 server actions，大家都体验了吗？',
      upvotes: 88,
      comments: 23,
      avatarColor: 'bg-blue-500',
      hasPoll: true,
      pollOptions: [
        { label: '体验过，很棒', votes: 40 },
        { label: '还没用过', votes: 30 },
        { label: '没听说', votes: 18 }
      ]
    },
    {
      id: 4,
      subreddit: 'r/webdev',
      author: 'u/webguy',
      timeAgo: '5 min. ago',
      title: '推荐一个超好用的免费图床',
      content: '',
      upvotes: 12,
      comments: 2,
      avatarColor: 'bg-green-500',
      hasLink: true,
      link: 'https://imgbed.example.com',
      linkTitle: 'imgbed.example.com - 免费图床'
    },
    {
      id: 5,
      subreddit: 'r/Frontend',
      author: 'u/cssmaster',
      timeAgo: '10 min. ago',
      title: 'CSS 一行代码实现多行省略号',
      content: '只需一行 CSS：text-overflow: ellipsis; white-space: nowrap; overflow: hidden;，你学会了吗？',
      upvotes: 33,
      comments: 5,
      avatarColor: 'bg-pink-500'
    }
  ];

  const recentPosts = [
    {
      subreddit: 'r/cursor',
      timeAgo: '5 days ago',
      title: 'TL;DR: Thanks to your insane support, my...',
      upvotes: 275,
      comments: 155,
      hasMedia: true
    },
    {
      subreddit: 'r/Bitcoin',
      timeAgo: '9 days ago',
      title: '~3 Year Update: I Took Out $150,000 in Personal Loans to Buy Bitcoin!',
      upvotes: 2700,
      comments: 602
    },
    {
      subreddit: 'r/node',
      timeAgo: '1 yr. ago',
      title: "What's your favorite typescript framework",
      upvotes: 11,
      comments: 39
    },
    {
      subreddit: 'r/reactjs',
      timeAgo: '2 days ago',
      title: 'React 19 正式发布',
      upvotes: 120,
      comments: 45
    },
    {
      subreddit: 'r/webdev',
      timeAgo: '3 hr. ago',
      title: '2024 年最值得关注的前端趋势',
      upvotes: 56,
      comments: 12
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 md:py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 mb-4">
              <div className="flex items-center p-3 border-b border-gray-200 dark:border-zinc-800">
                <select 
                  value={selectedSort} 
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="bg-transparent font-medium text-sm focus:outline-none text-gray-900 dark:text-gray-100"
                >
                  <option>Best</option>
                  <option>Hot</option>
                  <option>New</option>
                  <option>Top</option>
                </select>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 transition-colors">
                  <div className="flex flex-row md:flex-row">
                    {/* Vote Section */}
                    <div className="flex flex-col items-center p-2 bg-gray-50 dark:bg-zinc-950 rounded-l-lg md:rounded-l-lg md:rounded-tl-lg md:rounded-bl-lg">
                      <button className="p-1 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded">
                        <ChevronUp className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                      </button>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{post.upvotes}</span>
                      <button className="p-1 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded">
                        <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                      </button>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-3">
                      <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                        <div className={`w-5 h-5 ${post.avatarColor} rounded-full flex items-center justify-center`}>
                          <span className="text-white text-xs font-bold">
                            {post.subreddit.charAt(2).toUpperCase()}
                          </span>
                        </div>
                        <span className="font-medium">{post.subreddit}</span>
                        <span>•</span>
                        <span>{post.timeAgo}</span>
                        {post.joinButton && (
                          <button className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-blue-600 ml-2">
                            Join
                          </button>
                        )}
                        <div className="ml-auto">
                          <button className="p-1 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded">
                            <MoreHorizontal className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                          </button>
                        </div>
                      </div>

                      <h2 className="font-medium text-gray-900 dark:text-gray-100 mb-2 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 text-base md:text-lg">
                        {post.title}
                      </h2>

                      {post.content && (
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3 line-clamp-4 md:line-clamp-6">
                          {post.content}
                        </p>
                      )}

                      {post.hasImage && (
                        <div className="mb-3">
                          <div className="w-full h-48 md:h-64 bg-gray-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
                            <Image className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                            <span className="ml-2 text-gray-500 dark:text-gray-400">图片内容</span>
                          </div>
                        </div>
                      )}

                      {post.hasPoll && post.pollOptions && (
                        <div className="mb-3">
                          <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-3">
                            <div className="flex items-center mb-2 text-xs text-gray-500 dark:text-gray-400">
                              <BarChart2 className="w-4 h-4 mr-1" /> 投票
                            </div>
                            {post.pollOptions.map((opt, idx) => (
                              <div key={idx} className="flex items-center mb-1">
                                <div className="flex-1 text-sm text-gray-700 dark:text-gray-200">{opt.label}</div>
                                <div className="ml-2 text-xs text-gray-500 dark:text-gray-400">{opt.votes}票</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {post.hasLink && post.link && (
                        <div className="mb-3">
                          <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex items-center p-2 bg-gray-50 dark:bg-zinc-800 rounded hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors">
                            <LinkIcon className="w-4 h-4 mr-2 text-blue-500" />
                            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">{post.linkTitle || post.link}</span>
                          </a>
                        </div>
                      )}

                      <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                        <button className="flex items-center space-x-1 hover:bg-gray-100 dark:hover:bg-zinc-800 p-1 rounded">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:bg-gray-100 dark:hover:bg-zinc-800 p-1 rounded">
                          <Share className="w-4 h-4" />
                          <span>分享</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Recent Posts，仅桌面端显示 */}
          <div className="w-full md:w-80 md:block hidden">
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 sticky top-20">
              <div className="p-4 border-b border-gray-200 dark:border-zinc-800">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 flex items-center justify-between">
                  RECENT POSTS
                  <button className="text-blue-500 text-sm hover:text-blue-600 dark:hover:text-blue-400">
                    清空
                  </button>
                </h3>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-zinc-800">
                {recentPosts.map((post, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50 dark:hover:bg-zinc-950 cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-800 dark:bg-zinc-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">
                          {post.subreddit.charAt(2).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-1">
                          <span className="font-medium">{post.subreddit}</span>
                          <span className="mx-1">•</span>
                          <span>{post.timeAgo}</span>
                        </div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-tight mb-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 space-x-4">
                          <span>{post.upvotes} 赞</span>
                          <span>{post.comments} 评论</span>
                        </div>
                      </div>
                      {post.hasMedia && (
                        <div className="w-12 h-12 bg-gray-200 dark:bg-zinc-800 rounded flex-shrink-0 flex items-center justify-center">
                          <span className="text-xs text-gray-500 dark:text-gray-400">2:04</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-zinc-800 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex space-x-4 mb-2">
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Reddit Rules</a>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">User Agreement</a>
                </div>
                <p>Reddit, Inc. © 2025. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}