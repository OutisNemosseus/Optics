// Optics - Geometrical - Chapter 1
// 11 programs

export const programs = [
  {
    "id": "of",
    "title": "of - G10TINPOS\r",
    "description": "G10TINPOS\r",
    "category": "Optics - Geometrical",
    "chapter": "1",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# G10TINPOS\n\n# Positive Lens\n# Focal length f is positive, light from left propagating from medium with index 1 to lens\n# of refractive index n.\n# xo on left of surface (negative)\n\n# Calculation of graph for xi as function of xo over the total range of xo.\n# graph for xi as function of xo over the range of xo to the left of f.\n# graph for xi as function of xo over the range of xo to the right of f.\n\n\nf = 10\n# image focus: f\n# object focus: -f\n\nxo = np.arange(-100.001, 100+0.07, 0.07)\nxi = 1/(1/f+1/xo)\nfig = plt.figure(1)\n\nplt.subplot(1, 3, 1)\n\nplt.plot(xo,xi)\n\nplt.xlim(-150, 100)\nplt.ylim(-500, 200)\n\nplt.xlabel('xo')\nplt.legend(['xi(xo)'])\nxxo = np.arange(-50.001, -11+0.07, 0.07)\nxxi = 1/(1/f+1/xxo)\nplt.subplot(1, 3, 2)\n\nplt.plot(xxo,xxi)\n\nplt.xlim(-55, -10)\nplt.ylim(0, 100)\n\nplt.xlabel('xxo')\nplt.legend(['xxi(xxo)'])\nxxxo =np.arange(-9.001, 50+0.07, 0.07)\nxxxi = 1/(1/f+1/xxxo)\nplt.subplot(1, 3, 3)\n\nplt.plot(xxxo,xxxi)\n\nplt.xlim(-10, 50)\nplt.ylim(-100, 50)\n\nplt.xlabel('xxo')\nplt.legend(['xxxi(xxxo)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% G10TINPOS\n\n% Positive Lens\n% Focal length f is positive, light from left propagating from medium with index 1 to lens\n% of refractive index n.\n% xo on left of surface (negative)\n\n% Calculation of graph for xi as function of xo over the total range of xo.\n% graph for xi as function of xo over the range of xo to the left of f.\n% graph for xi as function of xo over the range of xo to the right of f.\n\nfunction G10TINPOS;\nf = 10;\n% image focus: f\n% object focus: -f\n\nxo = (-100.001:0.07:100);\nxi = 1./(1/f+1./xo);\n\nfigure(1);\nsubplot(1,3,1);\nplot(xo,xi);\naxis([-150 100 -500 200]);\nxlabel('xo');\nlegend('xi(xo)');\n\nxxo = (-50.001:0.07:-11);\nxxi = 1./(1/f+1./xxo);\n\nsubplot(1,3,2);\nplot(xxo,xxi);\naxis([-55 -10 0 100]);\nxlabel('xxo');\nlegend('xxi(xxo)');\n\nxxxo =(-9.001:0.07:50);\nxxxi = 1./(1/f+1./xxxo);\n\nsubplot(1,3,3);\nplot(xxxo,xxxi);\naxis([-10 50 -100 50]);\nxlabel('xxo');\nlegend('xxxi(xxxo)');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "Positive Thin Lens - Image Position",
    "tags": [
      "lens",
      "positive-lens",
      "focal-length",
      "thin-lens",
      "image-position",
      "chapter1",
      "geometrical-optics",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Lens (optics)",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)"
      },
      {
        "title": "Converging lens",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)#Types_of_simple_lenses"
      },
      {
        "title": "Focal length",
        "url": "https://en.wikipedia.org/wiki/Focal_length"
      },
      {
        "title": "Thin lens",
        "url": "https://en.wikipedia.org/wiki/Thin_lens"
      },
      {
        "title": "Geometrical optics",
        "url": "https://en.wikipedia.org/wiki/Geometrical_optics"
      },
      {
        "title": "Ray tracing",
        "url": "https://en.wikipedia.org/wiki/Ray_tracing_(physics)"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - G12TINNEG\r",
    "description": "G12TINNEG\r",
    "category": "Optics - Geometrical",
    "chapter": "1",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# G12TINNEG\n\n# Negative Lens\n# Focal length f is negative, light from left propagating from medium with index 1 to lens\n# of refractive index n.\n# xo on left of surface (negative)\n\n# Calculation of graph for xi as function of xo over the total range of xo.\n# graph for xi as function of xo over the range of xo to the left of f.\n# graph for xi as function of xo over the range of xo to the right of f.\n# graph for xi as function of xo over the range of xo to the right of f.\n\n\nf = -10\n# image focus: -f\n# object focus: f\n\nxo = np.arange(-100.001, 100+0.07, 0.07)\nxi = 1/(1/f+1/xo)\nfig = plt.figure(1)\n\nplt.subplot(1, 3, 1)\n\nplt.plot(xo,xi)\n\nplt.xlim(-150, 100)\nplt.ylim(-200, 300)\n\nplt.xlabel('xo')\nplt.legend(['xi(xo)'])\nxxo = np.arange(-50.001, 9+0.07, 0.07)\nxxi = 1/(1/f+1/xxo)\nplt.subplot(1, 3, 2)\n\nplt.plot(xxo,xxi)\n\nplt.xlim(-60, 10)\nplt.ylim(-20, 60)\n\nplt.xlabel('xxo')\nplt.legend(['xxi(xxo)'])\nxxxo =np.arange(11.001, 50+0.07, 0.07)\nxxxi = 1/(1/f+1/xxxo)\nplt.subplot(1, 3, 3)\n\nplt.plot(xxxo,xxxi)\n\nplt.xlim(10, 50)\nplt.ylim(-150, 0)\n\nplt.xlabel('xxo')\nplt.legend(['xxxi(xxxo)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% G12TINNEG\n\n% Negative Lens\n% Focal length f is negative, light from left propagating from medium with index 1 to lens\n% of refractive index n.\n% xo on left of surface (negative)\n\n% Calculation of graph for xi as function of xo over the total range of xo.\n% graph for xi as function of xo over the range of xo to the left of f.\n% graph for xi as function of xo over the range of xo to the right of f.\n% graph for xi as function of xo over the range of xo to the right of f.\n\nfunction G12TINNEG;\nf = -10;\n% image focus: -f\n% object focus: f\n\nxo = (-100.001:0.07:100);\nxi = 1./(1/f+1./xo);\n\nfigure(1);\nsubplot(1,3,1);\nplot(xo,xi);\naxis([-150 100 -200 300]);\nxlabel('xo');\nlegend('xi(xo)');\n\nxxo = (-50.001:0.07:9);\nxxi = 1./(1/f+1./xxo);\n\nsubplot(1,3,2);\nplot(xxo,xxi);\naxis([-60 10 -20 60]);\nxlabel('xxo');\nlegend('xxi(xxo)');\n\nxxxo =(11.001:0.07:50);\nxxxi = 1./(1/f+1./xxxo);\n\nsubplot(1,3,3);\nplot(xxxo,xxxi);\naxis([10 50 -150 0]);\nxlabel('xxo');\nlegend('xxxi(xxxo)');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "Negative Thin Lens - Image Position",
    "tags": [
      "lens",
      "negative-lens",
      "focal-length",
      "thin-lens",
      "image-position",
      "chapter1",
      "geometrical-optics",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Lens (optics)",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)"
      },
      {
        "title": "Diverging lens",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)#Types_of_simple_lenses"
      },
      {
        "title": "Focal length",
        "url": "https://en.wikipedia.org/wiki/Focal_length"
      },
      {
        "title": "Thin lens",
        "url": "https://en.wikipedia.org/wiki/Thin_lens"
      },
      {
        "title": "Geometrical optics",
        "url": "https://en.wikipedia.org/wiki/Geometrical_optics"
      },
      {
        "title": "Ray tracing",
        "url": "https://en.wikipedia.org/wiki/Ray_tracing_(physics)"
      }
    ]
  },
  {
    "id": "G14TINFOC",
    "title": "G14TINFOC - G14TINFOC\r",
    "description": "G14TINFOC\r",
    "category": "Optics - Geometrical",
    "chapter": "1",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# G14TINFOC\n# Focal length \n\n\n# 1. Calculation of focal length of thin lens of refractive index n2 in medium with\n# refractive index n1.\n\n# R is positive for convex surface, negative for concave surface\nr1 = -5;    # First surface\nr2 = 5;     # Second surface\n\nn2 = 1;     # Refractive index of lens n2\nn1 = 1.5;   # Refractive index of medium n1\n\nf = n1/((n2-n1)/r1+(n1-n2)/r2)  # f = 7.5\n\n# 2. Graph of focal length of thin lens with index n2 depending on\n# refractive index of medium n1.\n\n# The radii of curvature are chosen above. The range of n1 is divided into\n# lower and higher range because of singularity.\n\nnn2 = 1.5;  # Refractive index of lens nn2\nnn1 = (1:0.1:nn2-0.00001);  # Lower range\nnnn1 = (nn2+0.1:0.1:4);     # Upper range\n\nff = 1/((nn2-nn1)/r1+(nn1-nn2)/r2)\nfff = 1/((nn2-nnn1)/r1+(nnn1-nn2)/r2)\nfig = plt.figure(1)\n\nplt.subplot(1, 2, 1)\n\nplt.plot(nn1,ff)\n\nplt.xlim(1, 1.4)\nplt.ylim(-30, 0)\n\nplt.xlabel('nn1')\nplt.legend(['ff(nn1)'])\nplt.subplot(1, 2, 2)\n\nplt.plot(nnn1,fff)\n\nplt.xlim(1, 4)\nplt.ylim(0, 30)\n\nplt.xlabel('nnn1')\nplt.legend(['fff(nnn1)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% G14TINFOC\n% Focal length \n\nfunction G14TINFOC;\n\n% 1. Calculation of focal length of thin lens of refractive index n2 in medium with\n% refractive index n1.\n\n% R is positive for convex surface, negative for concave surface\nr1 = -5;    % First surface\nr2 = 5;     % Second surface\n\nn2 = 1;     % Refractive index of lens n2\nn1 = 1.5;   % Refractive index of medium n1\n\nf = n1/((n2-n1)/r1+(n1-n2)/r2)  % f = 7.5\n\n% 2. Graph of focal length of thin lens with index n2 depending on\n% refractive index of medium n1.\n\n% The radii of curvature are chosen above. The range of n1 is divided into\n% lower and higher range because of singularity.\n\nnn2 = 1.5;  % Refractive index of lens nn2\nnn1 = (1:0.1:nn2-0.00001);  % Lower range\nnnn1 = (nn2+0.1:0.1:4);     % Upper range\n\nff = 1./((nn2-nn1)/r1+(nn1-nn2)/r2);\nfff = 1./((nn2-nnn1)/r1+(nnn1-nn2)/r2);\n\nfigure(1);\nsubplot(1,2,1);\nplot(nn1,ff);\naxis([1 1.4 -30 0]);\nxlabel('nn1');\nlegend('ff(nn1)');\n\nsubplot(1,2,2);\nplot(nnn1,fff);\naxis([1 4 0 30]);\nxlabel('nnn1');\nlegend('fff(nnn1)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "Thin Lens Focal Length Calculator",
    "tags": [
      "lens",
      "focal-length",
      "refractive-index",
      "thin-lens",
      "curvature",
      "chapter1",
      "geometrical-optics",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Lens (optics)",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)"
      },
      {
        "title": "Focal length",
        "url": "https://en.wikipedia.org/wiki/Focal_length"
      },
      {
        "title": "Refractive index",
        "url": "https://en.wikipedia.org/wiki/Refractive_index"
      },
      {
        "title": "Thin lens",
        "url": "https://en.wikipedia.org/wiki/Thin_lens"
      },
      {
        "title": "Radius of curvature",
        "url": "https://en.wikipedia.org/wiki/Radius_of_curvature"
      },
      {
        "title": "Geometrical optics",
        "url": "https://en.wikipedia.org/wiki/Geometrical_optics"
      },
      {
        "title": "Ray tracing",
        "url": "https://en.wikipedia.org/wiki/Ray_tracing_(physics)"
      }
    ]
  },
  {
    "id": "G1FERMAT",
    "title": "G1FERMAT - G1FERMAT\r",
    "description": "G1FERMAT\r",
    "category": "Optics - Geometrical",
    "chapter": "1",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# G1FERMAT\n# Fermat's Principle\n# Graph of total travel time\n# t1 is the time to go from inital position (0,o) to point (xq,y) in medium with\n# velocity v1\n# t2 is the time to go from inital position (xq,y) to point (xf,yf) in medium with\n# velocity v2\n# there is a y value for minimum time\nxq=20\nxf=40\nyf=40\ny=np.arange(0, 40+1, 1)\n# velocity\nv1=1\nv2=2.5\n# v1 and v2 are at the Graph\n# time in medium 1\nt1=(1/v1)*np.sqrt((xq)**2+(y)**2)\n# time in medium 2\nt2=(1/v2)*np.sqrt((xf-xq)**2+(yf-y)**2)\nT=t1+t2\nfig = plt.figure(1)\n\nplt.plot(y,T)\n\nplt.xlim(0, 40)\nplt.ylim(35, 55)\n;                  # PLOTS LIMITS                    \nxlabel('y','Fontsize',12)\nplt.legend(['T(y)'])\ntitle('Figure 1','FontSize',12)\n# Changing the paramaters v1 and v2 changes the minimum time for total travel\n\n\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% G1FERMAT\n% Fermat's Principle\n% Graph of total travel time\n% t1 is the time to go from inital position (0,o) to point (xq,y) in medium with\n% velocity v1\n% t2 is the time to go from inital position (xq,y) to point (xf,yf) in medium with\n% velocity v2\n% there is a y value for minimum time\nxq=20;\nxf=40;\nyf=40;\ny=(0:1:40);\n% velocity\nv1=1;\nv2=2.5;\n% v1 and v2 are at the Graph\n% time in medium 1\nt1=(1/v1)*sqrt((xq)^2+(y).^2);\n% time in medium 2\nt2=(1/v2)*sqrt((xf-xq)^2+(yf-y).^2);\nT=t1+t2;\n\nfigure(1);\nplot(y,T);\naxis([0 40 35 55]);                  % PLOTS LIMITS                    \nxlabel('y','Fontsize',12);\nlegend('T(y)');\ntitle('Figure 1','FontSize',12);\n\n% Changing the paramaters v1 and v2 changes the minimum time for total travel\n\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "Fermat's Principle - Travel Time",
    "tags": [
      "fermat-principle",
      "optical-path",
      "travel-time",
      "refraction",
      "chapter1",
      "geometrical-optics"
    ],
    "wikipediaLinks": [
      {
        "title": "Fermat's principle",
        "url": "https://en.wikipedia.org/wiki/Fermat%27s_principle"
      },
      {
        "title": "Optical path length",
        "url": "https://en.wikipedia.org/wiki/Optical_path_length"
      },
      {
        "title": "Refraction",
        "url": "https://en.wikipedia.org/wiki/Refraction"
      },
      {
        "title": "Geometrical optics",
        "url": "https://en.wikipedia.org/wiki/Geometrical_optics"
      },
      {
        "title": "Ray tracing",
        "url": "https://en.wikipedia.org/wiki/Ray_tracing_(physics)"
      }
    ]
  },
  {
    "id": "G2FERMAT",
    "title": "G2FERMAT - G2FERMAT\r",
    "description": "G2FERMAT\r",
    "category": "Optics - Geometrical",
    "chapter": "1",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\nfrom mpl_toolkits.mplot3d import Axes3D\n\n# G2FERMAT\n\n# FERMAT's PRINCIPLE\n\n# t is the time to go from the initial position (0,0) to point (xq,q) with velocity v1\n# tt is the tiime to go from point (xq,q) to point (xp,p) with velocity v2\n# ttt is the time to go from point (xp,p) to the final position (xf,yf) with velocity v3\n# There is a q and p value for minimum time\n\n\nN = 20\ni = (0:1:N)\nk = (0:1:N)\nq = i\np = k\nxq = 20\nxp = 40\nxf = 60\nyf = 60\nv1 = 14\nv2 = 21\nv3 = 52\nt = np.sqrt((xq)**2+(q)**2)/v1\nfor r in range(len(q)):\n    for c in range(len(p)):\n        tt(r,c) = np.sqrt((xp-xq)**2+(p(c)-q(r))**2)/v2\nttt = np.sqrt((xf-xq)**2+(yf-p)**2)/v3\nfor r in range(len(q)):\n    for c in range(len(p)):\n        T(c,r) = tt(r)+tt(r,c) + ttt(c)\nM =T\nfig = plt.figure(1)\n\nplt.subplot(1, 2, 1)\n\nplt.contour(M)\nplt.subplot(1, 2, 2)\n\nax = plt.gca()\nif not hasattr(ax, 'plot_surface'):\n    fig = plt.figure()\n    ax = fig.add_subplot(111, projection='3d')\n    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))\n    ax.plot_surface(X, Y, M, cmap='viridis')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% G2FERMAT\n\n% FERMAT's PRINCIPLE\n\n% t is the time to go from the initial position (0,0) to point (xq,q) with velocity v1\n% tt is the tiime to go from point (xq,q) to point (xp,p) with velocity v2\n% ttt is the time to go from point (xp,p) to the final position (xf,yf) with velocity v3\n% There is a q and p value for minimum time\n\nfunction G2FERMAT;\nN = 20;\ni = (0:1:N);\nk = (0:1:N);\nq = i;\np = k;\nxq = 20;\nxp = 40;\nxf = 60;\nyf = 60;\nv1 = 14;\nv2 = 21;\nv3 = 52;\n\nt = sqrt((xq)^2+(q).^2)/v1;\nfor r=1:length(q);\n    for c=1:length(p);\n        tt(r,c) = sqrt((xp-xq)^2+(p(c)-q(r)).^2)/v2;\n    end;\nend;\nttt = sqrt((xf-xq)^2+(yf-p).^2)/v3;\n\nfor r=1:length(q);\n    for c=1:length(p);\n        T(c,r) = tt(r)+tt(r,c) + ttt(c);\n    end;\nend;\nM =T;\n\nfigure(1);\nsubplot(1,2,1);\ncontour(M);\nsubplot(1,2,2);\nmesh(M);\n\n\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "Fermat's Principle - Multi-Medium Path",
    "tags": [
      "fermat-principle",
      "optical-path",
      "multi-medium",
      "3d-visualization",
      "chapter1",
      "geometrical-optics",
      "contour-plot"
    ],
    "wikipediaLinks": [
      {
        "title": "Fermat's principle",
        "url": "https://en.wikipedia.org/wiki/Fermat%27s_principle"
      },
      {
        "title": "Optical path length",
        "url": "https://en.wikipedia.org/wiki/Optical_path_length"
      },
      {
        "title": "Geometrical optics",
        "url": "https://en.wikipedia.org/wiki/Geometrical_optics"
      },
      {
        "title": "Ray tracing",
        "url": "https://en.wikipedia.org/wiki/Ray_tracing_(physics)"
      }
    ]
  },
  {
    "id": "G30MIRCV",
    "title": "G30MIRCV - G30MIRCV\r",
    "description": "G30MIRCV\r",
    "category": "Optics - Geometrical",
    "chapter": "1",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# G30MIRCV\n\n# Concave mirror.\n\n# Radius of curvature is neg., xo is on left, is negative.\n# To get around the singularity at -xo = f one chooses the increments such that the\n# value for the singularity does not appear.\n\n\nr = -50\nxo = -60\nxi = 1/(1/(r/2) - 1/xo) # xi = -42.857\nm = -xi/xo              # m = -0.714\n\n# Graph\nxxo = np.arange(-100, -0.1+0.9, 0.9)\nxxi = 1/(1/(r/2)-1/xxo)\nfig = plt.figure(1)\n\nplt.plot(xxo,xxi)\n\nplt.xlim(-100, 0)\nplt.ylim(-4000, 2000)\n\nplt.xlabel('xxo')\nplt.legend(['xxi(xxo)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% G30MIRCV\n\n% Concave mirror.\n\n% Radius of curvature is neg., xo is on left, is negative.\n% To get around the singularity at -xo = f one chooses the increments such that the\n% value for the singularity does not appear.\n\nfunction G30MIRCV;\nr = -50;\nxo = -60;\nxi = 1/(1/(r/2) - 1/xo) % xi = -42.857\nm = -xi/xo              % m = -0.714\n\n% Graph\nxxo = (-100:0.9:-0.1);\nxxi = 1./(1/(r/2)-1./xxo);\n\nfigure(1);\nplot(xxo,xxi);\naxis([-100 0 -4000 2000]);\nxlabel('xxo');\nlegend('xxi(xxo)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "Concave Mirror - Image Formation",
    "tags": [
      "mirror",
      "concave-mirror",
      "reflection",
      "image-formation",
      "chapter1",
      "geometrical-optics"
    ],
    "wikipediaLinks": [
      {
        "title": "Mirror",
        "url": "https://en.wikipedia.org/wiki/Mirror"
      },
      {
        "title": "Curved mirror",
        "url": "https://en.wikipedia.org/wiki/Curved_mirror"
      },
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Image formation",
        "url": "https://en.wikipedia.org/wiki/Image_formation"
      },
      {
        "title": "Geometrical optics",
        "url": "https://en.wikipedia.org/wiki/Geometrical_optics"
      },
      {
        "title": "Ray tracing",
        "url": "https://en.wikipedia.org/wiki/Ray_tracing_(physics)"
      }
    ]
  },
  {
    "id": "G31MIRCX",
    "title": "G31MIRCX - G31MIRCV\r",
    "description": "G31MIRCV\r",
    "category": "Optics - Geometrical",
    "chapter": "1",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# G31MIRCV\n\n# Convex mirror.\n\n# Radius of curvature is positive, xo is on left, is negative.\n# No singularity. Only virtual images.\n\n\nr = 50\nxo = -10\nxi = 1/(1/(r/2) - 1/xo) # xi = 7.143\n\n# Graph\nxxo = np.arange(-100, -0.1+0.9, 0.9)\nxxi = 1/(1/(r/2)-1/xxo)\nfig = plt.figure(1)\n\nplt.plot(xxo,xxi)\n\nplt.xlim(-100, 0)\nplt.ylim(0, 20)\n\nplt.xlabel('xxo')\nplt.legend(['xxi(xxo)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% G31MIRCV\n\n% Convex mirror.\n\n% Radius of curvature is positive, xo is on left, is negative.\n% No singularity. Only virtual images.\n\nfunction G31MIRCX;\nr = 50;\nxo = -10;\nxi = 1/(1/(r/2) - 1/xo) % xi = 7.143\n\n% Graph\nxxo = (-100:0.9:-0.1);\nxxi = 1./(1/(r/2)-1./xxo);\n\nfigure(1);\nplot(xxo,xxi);\naxis([-100 0 0 20]);\nxlabel('xxo');\nlegend('xxi(xxo)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "Convex Mirror - Image Formation",
    "tags": [
      "mirror",
      "convex-mirror",
      "reflection",
      "image-formation",
      "chapter1",
      "geometrical-optics"
    ],
    "wikipediaLinks": [
      {
        "title": "Mirror",
        "url": "https://en.wikipedia.org/wiki/Mirror"
      },
      {
        "title": "Curved mirror",
        "url": "https://en.wikipedia.org/wiki/Curved_mirror"
      },
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Image formation",
        "url": "https://en.wikipedia.org/wiki/Image_formation"
      },
      {
        "title": "Geometrical optics",
        "url": "https://en.wikipedia.org/wiki/Geometrical_optics"
      },
      {
        "title": "Ray tracing",
        "url": "https://en.wikipedia.org/wiki/Ray_tracing_(physics)"
      }
    ]
  },
  {
    "id": "G32RESGG",
    "title": "G32RESGG - G32RESGG\r",
    "description": "G32RESGG\r",
    "category": "Optics - Geometrical",
    "chapter": "1",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# G32RESGG\n# Calculation of Resonator using g1, g2, and d\n\nr1 = 1\nr2 = 1\nd = 2\ng1 = 1 - d/r1\ng2 = 1 - d/r2\nLamda1 = -1 + 2*g1*g2+2*np.sqrt(-g1*g2+(g1**2)*(g2**2))\nLamda2 = -1 + 2*g1*g2-2*np.sqrt(-g1*g2+(g1**2)*(g2**2))\n# Lamda1 = 1\n# Lamda2 = 1\n\n\n# we set the product g1g2 = x and plot it over the range from -1 to 2\nx = np.arange(-1, 2+0.1, 0.1)\ny = np.abs((2*x-1)+np.sqrt((2*x-1)**2-1))-1\nyy = np.abs((2*x-1)-np.sqrt((2*x-1)**2-1))-1\nfig = plt.figure(1)\n\nplt.subplot(1, 2, 1)\n\nplt.plot(x,y)\n\nplt.xlim(-1, 2)\nplt.ylim(-5, 5)\n\nplt.xlabel('x')\nplt.legend(['y(x)'])\nplt.subplot(1, 2, 2)\n\nplt.plot(x,yy)\n\nplt.xlim(-1, 2)\nplt.ylim(-5, 5)\n\nplt.xlabel('x')\nplt.legend(['yy(x)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% G32RESGG\n% Calculation of Resonator using g1, g2, and d\nfunction G32RESGG;\n\nr1 = 1;\nr2 = 1;\nd = 2;\ng1 = 1 - d/r1;\ng2 = 1 - d/r2;\n\nLamda1 = -1 + 2*g1*g2+2*sqrt(-g1*g2+(g1^2)*(g2^2))\nLamda2 = -1 + 2*g1*g2-2*sqrt(-g1*g2+(g1^2)*(g2^2))\n% Lamda1 = 1\n% Lamda2 = 1\n\n\n% we set the product g1g2 = x and plot it over the range from -1 to 2\nx = (-1:0.1:2);\ny = abs((2*x-1)+sqrt((2*x-1).^2-1))-1;\nyy = abs((2*x-1)-sqrt((2*x-1).^2-1))-1;\n\nfigure(1);\nsubplot(1,2,1);\nplot(x,y);\naxis([-1 2 -5 5]);\nxlabel('x');\nlegend('y(x)');\n\nsubplot(1,2,2);\nplot(x,yy);\naxis([-1 2 -5 5]);\nxlabel('x');\nlegend('yy(x)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "G32RESGG",
    "tags": [
      "chapter1",
      "geometrical-optics"
    ],
    "wikipediaLinks": [
      {
        "title": "Geometrical optics",
        "url": "https://en.wikipedia.org/wiki/Geometrical_optics"
      },
      {
        "title": "Ray tracing",
        "url": "https://en.wikipedia.org/wiki/Ray_tracing_(physics)"
      }
    ]
  },
  {
    "id": "G4PRISM",
    "title": "G4PRISM - G4PRISM\r",
    "description": "G4PRISM\r",
    "category": "Optics - Geometrical",
    "chapter": "1",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# G4PRISM\n\n# Graph of the angle of deviation for refraction on a prism\n# depending on the angle of incidence\n\n# ?1 is the angle of incidence with respect to the normal\n# ?1 is the angle of deviation\n# n is the refractive index and A is the apex angle.\n\n\nTheta1 = np.arange(0, 1+0.001, 0.001)\nn = 2\nA = ((2*np.pi)/360)*30\nDelta = Theta1+ asin(np.sqrt(n**2-(np.sin(Theta1))**2)*np.sin(A)-np.sin(Theta1)*np.cos(A))-A\nfig = plt.figure(1)\n\nplt.plot(Theta1,Delta)\n\nplt.xlim(0, 1)\nplt.ylim(0.4, 1.2)\n\nplt.xlabel('\theta1')\nplt.legend(['delta(\theta1)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% G4PRISM\n\n% Graph of the angle of deviation for refraction on a prism\n% depending on the angle of incidence\n\n% ?1 is the angle of incidence with respect to the normal\n% ?1 is the angle of deviation\n% n is the refractive index and A is the apex angle.\n\nfunction G4PRISM;\nTheta1 = (0:0.001:1);\nn = 2;\nA = ((2*pi)/360)*30;\nDelta = Theta1+ asin(sqrt(n^2-(sin(Theta1)).^2)*sin(A)-sin(Theta1)*cos(A))-A;\n\nfigure(1);\nplot(Theta1,Delta);\naxis([0 1 0.4 1.2]);\nxlabel('\theta1');\nlegend('delta(\theta1)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "G4PRISM",
    "tags": [
      "chapter1",
      "geometrical-optics",
      "prism",
      "refraction"
    ],
    "wikipediaLinks": [
      {
        "title": "Geometrical optics",
        "url": "https://en.wikipedia.org/wiki/Geometrical_optics"
      },
      {
        "title": "Prism (optics)",
        "url": "https://en.wikipedia.org/wiki/Prism_(optics)"
      },
      {
        "title": "Refraction",
        "url": "https://en.wikipedia.org/wiki/Refraction"
      },
      {
        "title": "Ray tracing",
        "url": "https://en.wikipedia.org/wiki/Ray_tracing_(physics)"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - G6SINGCX\r",
    "description": "G6SINGCX\r",
    "category": "Optics - Geometrical",
    "chapter": "1",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# G6SINGCX\n\n# Convex single refracting surface\n# r is positive, light from left propagating from medium with n1 to medium with n2\n# xo on left of surface (negative)\n\n# Calculation of graph for xi as function of xo over the total range of xo.\n# graph for xi as function of xo over the range of xo to the left of xof.\n# graph for xi as function of xo over the range of xo to the right of xof.\n\n\nr = 10\nn1 = 1\nn2 = 1.5\n# image focus\nxif = n2*(r/(n2-n1))    # xif = 30;:\n# object focus\nxof = n1*(r/(n1-n2))    # xof = -20\nxo = np.arange(-100.001, 100+0.07, 0.07)\nxi = n2/(((n2-n1)/r)+n1/xo)\nfig = plt.figure(1)\n\nplt.subplot(1, 3, 1)\n\nplt.plot(xo,xi)\n\nplt.xlim(-150, 100)\nplt.ylim(-1500, 1500)\n\nplt.xlabel('xo')\nplt.legend(['xi(xo)'])\nxxo = np.arange(-100.001, -22+0.07, 0.07)\nxxi = n2/(((n2-n1)/r)+n1/xxo)\nplt.subplot(1, 3, 2)\n\nplt.plot(xxo,xxi)\n\nplt.xlim(-110, -20)\nplt.ylim(0, 300)\n\nplt.xlabel('xxo')\nplt.legend(['xxi(xxo)'])\nxxxo = np.arange(-15.001, 50+0.07, 0.07)\nxxxi = n2/(((n2-n1)/r)+n1/xxxo)\nplt.subplot(1, 3, 3)\n\nplt.plot(xxxo,xxxi)\n\nplt.xlim(-20, 50)\nplt.ylim(-100, 50)\n\nplt.xlabel('xxxo')\nplt.legend(['xxxi(xxxo)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% G6SINGCX\n\n% Convex single refracting surface\n% r is positive, light from left propagating from medium with n1 to medium with n2\n% xo on left of surface (negative)\n\n% Calculation of graph for xi as function of xo over the total range of xo.\n% graph for xi as function of xo over the range of xo to the left of xof.\n% graph for xi as function of xo over the range of xo to the right of xof.\n\nfunction G6SINGCX;\nr = 10;\nn1 = 1;\nn2 = 1.5;\n% image focus\nxif = n2*(r/(n2-n1))    % xif = 30;\n% object focus\nxof = n1*(r/(n1-n2))    % xof = -20;\n\nxo = (-100.001:0.07:100);\nxi = n2./(((n2-n1)/r)+n1./xo);\n\nfigure(1);\nsubplot(1,3,1);\nplot(xo,xi);\naxis([-150 100 -1500 1500]);\nxlabel('xo');\nlegend('xi(xo)');\n\nxxo = (-100.001:0.07:-22);\nxxi = n2./(((n2-n1)/r)+n1./xxo);\n\n\nsubplot(1,3,2);\nplot(xxo,xxi);\naxis([-110 -20 0 300]);\nxlabel('xxo');\nlegend('xxi(xxo)');\n\nxxxo = (-15.001:0.07:50);\nxxxi = n2./(((n2-n1)/r)+n1./xxxo);\n\n\nsubplot(1,3,3);\nplot(xxxo,xxxi);\naxis([-20 50 -100 50]);\nxlabel('xxxo');\nlegend('xxxi(xxxo)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "G6SINGCX",
    "tags": [
      "chapter1",
      "geometrical-optics",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Geometrical optics",
        "url": "https://en.wikipedia.org/wiki/Geometrical_optics"
      },
      {
        "title": "Ray tracing",
        "url": "https://en.wikipedia.org/wiki/Ray_tracing_(physics)"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - G8SINGCV\r",
    "description": "G8SINGCV\r",
    "category": "Optics - Geometrical",
    "chapter": "1",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# G8SINGCV\n\n# Convex single refracting surface\n# r is negative, light from left propagating from medium with n1 to medium with n2\n# xo on left of surface (negative)\n\n# Calculation of graph for xi as function of xo over the total range of xo.\n# graph for xi as function of xo over the range of xo to the left of xof.\n# graph for xi as function of xo over the range of xo to the right of xof.\n\n\nr = -10\nn1 = 1\nn2 = 1.5\n# image focus\nxif = n2*(r/(n2-n1))    # xif = -30;:\n# object focus\nxof = n1*(r/(n1-n2))    # xof = 20\nxo = np.arange(-100.001, 100+0.07, 0.07)\nxi = n2/(((n2-n1)/r)+n1/xo)\nfig = plt.figure(1)\n\nplt.subplot(1, 3, 1)\n\nplt.plot(xo,xi)\n\nplt.xlim(-150, 100)\nplt.ylim(-2500, 1000)\n\nplt.xlabel('xo')\nplt.legend(['xi(xo)'])\nxxo = np.arange(-100.001, 15+0.07, 0.07)\nxxi = n2/(((n2-n1)/r)+n1/xxo)\nplt.subplot(1, 3, 2)\n\nplt.plot(xxo,xxi)\n\nplt.xlim(-120, 20)\nplt.ylim(-50, 100)\n\nplt.xlabel('xxo')\nplt.legend(['xxi(xxo)'])\nxxxo = np.arange(22.001, 50+0.07, 0.07)\nxxxi = n2/(((n2-n1)/r)+n1/xxxo)\nplt.subplot(1, 3, 3)\n\nplt.plot(xxxo,xxxi)\n\nplt.xlim(20, 50)\nplt.ylim(-400, 0)\n\nplt.xlabel('xxxo')\nplt.legend(['xxxi(xxxo)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% G8SINGCV\n\n% Convex single refracting surface\n% r is negative, light from left propagating from medium with n1 to medium with n2\n% xo on left of surface (negative)\n\n% Calculation of graph for xi as function of xo over the total range of xo.\n% graph for xi as function of xo over the range of xo to the left of xof.\n% graph for xi as function of xo over the range of xo to the right of xof.\n\nfunction G8SINGCV;\nr = -10;\nn1 = 1;\nn2 = 1.5;\n% image focus\nxif = n2*(r/(n2-n1))    % xif = -30;\n% object focus\nxof = n1*(r/(n1-n2))    % xof = 20;\n\nxo = (-100.001:0.07:100);\nxi = n2./(((n2-n1)/r)+n1./xo);\n\nfigure(1);\nsubplot(1,3,1);\nplot(xo,xi);\naxis([-150 100 -2500 1000]);\nxlabel('xo');\nlegend('xi(xo)');\n\nxxo = (-100.001:0.07:15);\nxxi = n2./(((n2-n1)/r)+n1./xxo);\n\nsubplot(1,3,2);\nplot(xxo,xxi);\naxis([-120 20 -50 100]);\nxlabel('xxo');\nlegend('xxi(xxo)');\n\nxxxo = (22.001:0.07:50);\nxxxi = n2./(((n2-n1)/r)+n1./xxxo);\n\nsubplot(1,3,3);\nplot(xxxo,xxxi);\naxis([20 50 -400 0]);\nxlabel('xxxo');\nlegend('xxxi(xxxo)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "G8SINGCV",
    "tags": [
      "chapter1",
      "geometrical-optics",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Geometrical optics",
        "url": "https://en.wikipedia.org/wiki/Geometrical_optics"
      },
      {
        "title": "Ray tracing",
        "url": "https://en.wikipedia.org/wiki/Ray_tracing_(physics)"
      }
    ]
  }
];
